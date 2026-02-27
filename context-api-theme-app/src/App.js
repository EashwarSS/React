import React from "react";
import { BlogProvider } from "./context/BlogContext";
import { ThemeProvider } from "./context/ThemeContext";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BlogProvider>
        <h1>Blog App</h1>
        <ThemeToggle />
        <AddBlog />
        <BlogList />
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;