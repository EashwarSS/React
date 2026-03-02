import React, { useState, useEffect } from 'react';
import { createPost } from '../services/postService';

export default function PostForm({posts, setPosts, editingPost, setEditingPost}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body };
    createPost(newPost)
      .then((response) => {
        setPosts([...posts, response.data]);
        setTitle('');
        setBody('');
      })
      .catch((err) => {
        console.error(err);
      });
  };
 
const addPost = (e) => {
  e.preventDefault();
  const newPost = { title, body };
  createPost(newPost)
    .then((response) => {
      setPosts([...posts, response.data]);
      setTitle('');
      setBody('');
    })
    .catch((err) => {
      console.error(err);
    });
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">{editingPost ? 'Update Post' : 'Add Post'}</button>
    </form>
  );
}