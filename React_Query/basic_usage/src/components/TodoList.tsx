import { FC } from 'react'

import { useQueryTodos } from '@/hooks/useQueryTodos'

const TodoList: FC = () => {
  const { data: todos } = useQueryTodos()

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
