import { randomUUID } from 'node:crypto'
import { Server, createServer } from 'node:http'
import express, {
  Application, Request, Response, NextFunction, RequestHandler,
} from 'express'
import helmet from 'helmet'
import pino from 'pino-http'

export type WebApplicationOptions = {
  httpServerPort: number,
}

export default class WebApplication {
  private readonly httpServer: Server = createServer()

  private readonly httpServerPort: number = 3000

  private readonly application: Application = express()

  constructor(options: WebApplicationOptions) {
    this.httpServerPort = options.httpServerPort || 3000
    this.application.use(helmet())
    this.application.use(express.json())
    this.application.use(express.urlencoded({ extended: true }))
    this.application.use(WebApplication.logger())
  }

  private static logger() {
    return pino({
      genReqId(req, res) {
        const existingID = req.id ?? req.headers['x-request-id']
        if (existingID) return existingID
        const id = randomUUID()
        res.setHeader('X-Request-Id', id)
        return id
      },
    })
  }

  private useDefaultErrorHandler(): void {
    this.application.use((request: Request, response: Response) => {
      response.status(404).json({
        success: false,
        message: 'Not Found',
      })
    })

    this.application.use((error: unknown, request: Request, response: Response, next: NextFunction) => {
      request.log.error(error)
      next(error)
    })

    this.application.use((error: unknown, request: Request, response: Response, next: NextFunction) => {
      if (response.headersSent) {
        next(error)
        return
      }
      response.status(500).json({
        success: false,
        message: 'Internal Server Error',
      })
    })
  }

  private bindEvents(): void {
    this.httpServer.on('request', this.application)
  }

  private listen(): void {
    this.httpServer.listen(this.httpServerPort, () => {
      process.stdout.write(`\nHTTP Server listening on port ${this.httpServerPort}...\n\n`)
    })
  }

  public get(path: string, ...handlers: Array<RequestHandler>): void {
    this.application.get(path, ...handlers)
  }

  public start(): void {
    this.useDefaultErrorHandler()
    this.bindEvents()
    this.listen()
  }
}
