import { FC } from 'react'

import { useQueryPosts } from '@/hooks/useQueryPosts'
import Spinner from './Spinner'

const PostList: FC = () => {
  const { data: posts, error, isError, isLoading } = useQueryPosts()

  if (isLoading) return <Spinner />
  if (isError) return <p className="text-3xl text-red-600">Error! {error.message}</p>

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default PostList
