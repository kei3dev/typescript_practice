import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import type { Todo } from '@/types'

export const useQueryTodos = () => {
  const getTodos = async () => {
    const { data } = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=10&_page=0'
    )
    return data
  }
  return useQuery<Todo[]>(['todos'], getTodos)
}
