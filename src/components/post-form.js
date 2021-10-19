function PostForm() {
  return (
    <div className="form">
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label for="body">Body:</label>
        <input type="text" id="body" name="body" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default PostForm;
