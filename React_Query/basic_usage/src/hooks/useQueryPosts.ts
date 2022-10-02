import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import type { Post } from '@/types'

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const useQueryPosts = () => {
  const getPosts = async () => {
    const { data } = await axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0')
      .then(await sleep(5000))
    return data
  }
  return useQuery<Post[]>(['posts'], getPosts)
}
