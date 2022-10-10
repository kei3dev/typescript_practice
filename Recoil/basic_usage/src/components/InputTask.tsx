import { ChangeEvent, FC, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

import { addTitleState } from '@/states/addTitleState'
import { inputTitleState } from '@/states/inputTitleState'

const InputTask: FC = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState)
  const [addTitle, setAddTitle] = useRecoilState(addTitleState)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
    },
    [setInputTitle]
  )

  const handleClick = useCallback(() => {
    setAddTitle([...addTitle, { id: uuidv4(), title: inputTitle }])
    setInputTitle('')
  }, [addTitle, inputTitle, setAddTitle, setInputTitle])

  return (
    <div>
      <input
        type="text"
        placeholder="タスクを入力してください"
        value={inputTitle}
        className="mr-1 w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-4"
        onChange={handleChange}
      />
      <button
        type="button"
        className={`rounded p-4 ${inputTitle === '' ? 'bg-blue-200' : 'bg-blue-400'}`}
        onClick={handleClick}
        disabled={inputTitle === ''}
      >
        追加
      </button>
    </div>
  )
}

export default InputTask
