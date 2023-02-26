import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello Express')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server run at port ${PORT}`))
