import env from 'require-env'

const Config = {
  serviceName: env.require('SERVICE_NAME'),
  serviceHttpPort: parseInt(env.require('SERVICE_HTTP_PORT'), 10),
}

export default Config
