import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
  title: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  res.status(200).json([{ title: 'task 1' }, { title: 'task 2' }, { title: 'task 3' }])
}

export default handler
