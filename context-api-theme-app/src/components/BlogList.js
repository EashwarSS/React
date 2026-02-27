import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function BlogList() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div>
      <h2>Blogs</h2>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>

          <button onClick={() => deleteBlog(blog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}