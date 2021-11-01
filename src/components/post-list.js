import { useState, useEffect } from 'react'
import Post from './post'

function PostList() {
  const [postListData, setPostListData] = useState([])
  const url = 'http://localhost:8080/api/posts'
  const fetchPostListData = async () => {
    try {
      const response = await fetch(url, { mode: 'cors' })
      const data = await response.json()
      console.log({ data })
      setPostListData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPostListData()
  }, [])

  return (
    <div className='postList'>
      <ul>
        {postListData.map((post) => (
          <Post postData={post} key={post.post_id} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
