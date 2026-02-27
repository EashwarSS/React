import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BlogList() {

  const { user } = useContext(AuthContext);

  const blogs = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Context API Guide" }
  ];

  return (
    <div>
      <h2>Logged in as: {user.name}</h2>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>

          {/* Admin Check */}
          {user.role === "admin" && (
            <button>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
}