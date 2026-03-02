import React, { useState, useEffect } from 'react';
import { getPosts, deletePost} from '../services/postService';
import PostForm from './PostForm';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const startEditing = (post) => {
    setEditingPost(post);
  }

  return (
    <div>
      <h1>Posts</h1>
      <PostForm posts={posts} setPosts={setPosts} editingPost={editingPost} setEditingPost={setEditingPost}/>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}<p>{post.body}</p>
            <button onClick={() => startEditing(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))} 
      </ul>
    </div>
  );
}  
    