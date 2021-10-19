import Navbar from "./components/navbar";
import PostForm from "./components/post-form";
import PostList from "./components/post-list";
function App() {
  return (
    <div>
      <Navbar />
      <PostList />
      <PostForm />
      <div className="greeting">
        <h2>Hello User!</h2>
      </div>
    </div>
  );
}

export default App;
