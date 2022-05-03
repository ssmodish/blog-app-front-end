import { useState, useEffect } from 'react'

import Axios from 'axios'

const api = Axios.create({
  baseURL: 'http://localhost:8080/api/posts',
})

// import PostForm from './components/post-form'
// import PostList from './components/post-list'

function App() {
  const [newPost, setNewPost] = useState({ post_title: '', post_body: '' })
  const [postListData, setPostListData] = useState([])

  const [userId, setUserId] = useState(99)

  // Get All Posts
  const getAllPosts = () => {
    api.get('/').then((res) => {
      console.log(res.data)
      setPostListData(res.data)
    })
  }

  // Add New Post
  const addNewPost = () => {
    console.log('adding this new post: ' + newPost.post_title)
    api
      .post('/', { user_id: userId, ...newPost })
      .then((res) => {
        console.log(res)
        if (res.status === 200) console.log('Successfully added new post')
        else console.log('something went wrong')
      })
      .then(setNewPost({ post_title: '', post_body: '' }))
      .catch((err) => console.log(err))
  }

  // Update a Post
  const updatePost = (post_id) => {
    api
      .put('/' + post_id, { ...newPost })
      .then((res) => {
        if (res.status === 200) console.log('Successfully updated post')
        else console.log('something went wrong')
      })
      .catch((err) => console.log(err))
    setPostListData(...postListData.filter((post) => post.post_id !== post_id), newPost)
    setNewPost({})
  }

  // Delete a Post
  const deletePost = (post_id) => {
    api
      .delete('/' + post_id)
      .then((res) => {
        if (res.status === 200) console.log('Successfully deleted post')
        else console.log('something went wrong')
      })
      .catch((err) => console.log(err))
    setPostListData(postListData.filter((post) => post.post_id !== post_id))
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name

    setNewPost((newPost) => {
      return {
        ...newPost,
        [name]: value,
      }
    })
  }

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl mb-6'>Simple Blog App</h1>

      <div className='form w-1/2'>
        <form onSubmit={addNewPost}>
          <div className='grid gap-4'>
            <div className='grid columns-4 columns-xs gap-1'>
              <label for='title'>Title:</label>
              <input
                className='border-solid border-2 border-black col-start-2 col-span-3'
                type='text'
                id='title'
                name='post_title'
                onChange={handleChange}
                value={newPost.post_title}
              />
              <label for='body'>Body:</label>
              <input
                className='border-solid border-2 border-black col-start-2 col-span-3'
                type='text'
                id='body'
                name='post_body'
                onChange={handleChange}
                value={newPost.post_body}
              />
              <button className='border-solid border-4 border-green-400 col-start-4'>Submit</button>
            </div>
          </div>
        </form>
        <br />
      </div>
      <div className='postList'>
        <ul>
          {postListData.map((post) => (
            <div className='post' key={post.post_id}>
              <li>
                <h2>{post.post_title}</h2>
                <p>{post.post_body}</p>
                <button>Edit</button>
                <button onClick={() => deletePost(post.post_id)}>Delete</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
