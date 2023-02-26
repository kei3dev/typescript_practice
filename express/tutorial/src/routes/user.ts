import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  res.send('user')
})

router.get('/info', (_req: Request, res: Response) => {
  res.send('user info')
})

router.get('/:id', (req: Request, res: Response) => {
  res.send(`user info for ${req.params.id}`)
})

export default router
