import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // Logged-in user
  const [user, setUser] = useState({
    name: "Eashwar",
    role: "admin" // change to "user"
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};