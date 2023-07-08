import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  return (
    <AuthContext.Provider value={{ navigate }}>{children}</AuthContext.Provider>
  );
};
