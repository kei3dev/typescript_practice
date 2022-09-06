import { FC } from 'react'

import { useQueryPosts } from '@/hooks/useQueryPosts'
import Spinner from './Spinner'

const PostList: FC = () => {
  const { data: posts, error, isError, isLoading } = useQueryPosts()
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <div>Error! {error.message}</div>
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
