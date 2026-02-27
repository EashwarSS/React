import React from "react";
import { AuthProvider } from "./context/AuthContext";
import BlogList from "./components/BlogList";

function App() {
  return (
    <AuthProvider>
      <h1>Blog Application</h1>
      <BlogList />
    </AuthProvider>
  );
}

export default App;
