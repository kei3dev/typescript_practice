import { FC } from 'react'
import { useRecoilValue } from 'recoil'

import { addTitleState, addTitleStateLength } from '@/states/addTitleState'

const TaskList: FC = () => {
  const addTitles = useRecoilValue(addTitleState)
  const addTitleLength = useRecoilValue(addTitleStateLength)

  return (
    <div className="w-[360px]">
      <div className="my-4 text-center">{addTitleLength}個のタスクがあります</div>
      <ul className="grid gap-2">
        {addTitles.map((task) => (
          <li key={task.id} className="bg-white p-3 shadow-sm">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
