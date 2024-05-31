import {
  RequestHandler,
  Request,
  Response,
  NextFunction,
} from 'express'

export default abstract class Middleware {
  protected abstract handler(...args: Parameters<RequestHandler>): Promise<void> | void

  public getHandler(): RequestHandler {
    return (request: Request, response: Response, next: NextFunction): void => {
      Promise.resolve(this.handler(request, response, next))
        .catch(next)
    }
  }
}
