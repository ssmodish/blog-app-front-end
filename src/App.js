function App() {
  return (
    <div>
      <div id="navbar">
        <h1>Welcome to Grammerhub</h1>
        <div className="authorization">
          <button>Login</button>
          <button>Register</button>
          <button>Logout</button>
        </div>
      </div>
      <div className="postList">
        <ul>
          <div className="post">
            <li>
              Post 1
              <button>Edit</button>
              <button>Delete</button>
            </li>
          </div>
          <li>Post 2</li>
          <li>Post 3</li>
        </ul>
      </div>
      <div className="form">
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" /><br />
          <label for="body">Body:</label>
          <input type="text" id="body" name="body" /><br />
          <button>Submit</button>
        </form>
      </div>
        <div className="greeting">
          <h2>Hello User!</h2>
        </div>
    </div>
  )
}

export default App
