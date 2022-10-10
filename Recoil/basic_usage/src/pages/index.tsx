import type { NextPage } from 'next'

import InputTask from '@/components/InputTask'
import Layout from '@/components/Layout'
import TaskList from '@/components/TaskList'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <InputTask />
      <TaskList />
    </Layout>
  )
}

export default HomePage
