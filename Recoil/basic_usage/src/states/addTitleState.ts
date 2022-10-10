import { atom, selector } from 'recoil'

import type { Task } from '@/types/Task'

export const addTitleState = atom<Task[]>({
  key: 'addTitleState',
  default: [],
})

export const addTitleStateLength = selector<number>({
  key: 'addTitleStateLength',
  get: ({ get }) => {
    const addTitles = get(addTitleState)
    return addTitles.length
  },
})
