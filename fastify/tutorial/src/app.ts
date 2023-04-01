import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import fjwt from '@fastify/jwt'
import dotenv from 'dotenv'

import userRoutes from './modules/user/user.route'
import { userSchemas } from './modules/user/user.schema'

dotenv.config()

const jwtSecret = process.env.JWT_SECRET
if (!jwtSecret) {
  console.error('JWT_SECRET is not set in .env file')
  process.exit(1)
}

export const server = fastify()

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
  }
}

server.register(fjwt, {
  secret: jwtSecret,
})

server.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await request.jwtVerify()
  } catch (e) {
    return reply.send(e)
  }
})

server.get('/', async (req, res) => {
  return { status: 'ok' }
})

const main = async () => {
  for (const schema of userSchemas) {
    server.addSchema(schema)
  }

  server.register(userRoutes, { prefix: 'api/users' })

  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
    console.log('Server ready at http://localhost:3000')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()
