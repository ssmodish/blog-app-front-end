import { useState, useEffect } from 'react'

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
          <li>Post: {post.post_title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
