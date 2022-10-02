import { FC } from 'react'

import { useQueryPosts } from '@/hooks/useQueryPosts'

const PostList: FC = () => {
  const { data: posts } = useQueryPosts()

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default PostList
