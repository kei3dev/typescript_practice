import express, { Application, NextFunction, Request, Response } from 'express'
import userRouter from './routes/user'

const app: Application = express()

const mylogger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(req.originalUrl)
  next()
}

app.use(mylogger)

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello Express')
})

app.use('/user', userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server run at port ${PORT}`))
