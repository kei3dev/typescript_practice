import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { Post } from '@/types'

export const useQueryPosts = () => {
  const getPosts = async () => {
    const { data } = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
    )
    return data
  }
  return useQuery<Post[], Error>(['posts'], getPosts)
}
