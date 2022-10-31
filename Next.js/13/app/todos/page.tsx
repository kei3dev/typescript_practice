import { use } from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/todos')
  return res.json()
}

type Todo = {
  title: string
}

export default function Page() {
  const todos: Todo[] = use(getData())

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo, index) => {
        return <div key={index}>{todo.title}</div>
      })}
    </>
  )
}
