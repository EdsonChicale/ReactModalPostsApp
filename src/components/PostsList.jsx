import Modal from "./Modal";
import NewPost from "../routes/NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div
          style={{ textAlign: "center", color: "white" }}
          className={classes.noPosts}
        >
          <p>No posts yet!</p>
          <p>Be the first to add one.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
