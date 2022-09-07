import { FC } from 'react'

import { useQueryPosts } from '@/hooks/useQueryPosts'
import Spinner from './Spinner'
import LayoutCenter from './LayoutCenter'

const PostList: FC = () => {
  const { data: posts, error, isError, isLoading } = useQueryPosts()

  if (isLoading) {
    return (
      <LayoutCenter>
        <Spinner />
      </LayoutCenter>
    )
  }

  if (isError) {
    return (
      <LayoutCenter>
        <p className="text-3xl text-red-600">Error! {error.message}</p>
      </LayoutCenter>
    )
  }

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default PostList
