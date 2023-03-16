import fastify from 'fastify'

const server = fastify()

server.get('/', async (req, res) => {
  return { status: 'ok' }
})

const main = async () => {
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
