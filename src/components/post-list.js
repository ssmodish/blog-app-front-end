import Post from "./post";
function PostList() {
  return (
    <div className="postList">
      <ul>
        <Post />
        <Post />
        <Post />
      </ul>
    </div>
  );
}

export default PostList;
