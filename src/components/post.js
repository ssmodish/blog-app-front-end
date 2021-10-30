function Post(props) {
  const { post_title, post_body } = props.postData
  return (
    <div className='post'>
      <li>
        <h2>{post_title}</h2>
        <p>{post_body}</p>
        <button>Edit</button>
        <button>Delete</button>
      </li>
    </div>
  )
}
export default Post
