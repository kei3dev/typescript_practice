import { FC } from 'react'

import { Tabs } from '@/types'

type Props = {
  select: Tabs
  isPending: boolean
  onClick: (tab: Tabs) => void
}

const TabList: FC<Props> = ({ select, isPending, onClick }) => {
  return (
    <div className={`flex gap-2 ${isPending ? 'pointer-events-none opacity-60' : ''}`}>
      <button
        className={`rounded p-3 transition ${
          select === 'todo' ? 'bg-green-400 hover:bg-green-500' : 'bg-green-50 hover:bg-green-100'
        }`}
        onClick={() => onClick('todo')}
      >
        Todo
      </button>
      <button
        className={`rounded p-3 transition ${
          select === 'post' ? 'bg-green-400 hover:bg-green-500' : 'bg-green-50 hover:bg-green-100'
        }`}
        onClick={() => onClick('post')}
      >
        Post
      </button>
    </div>
  )
}

export default TabList
