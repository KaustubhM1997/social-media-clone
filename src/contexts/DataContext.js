import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getPosts = async () => {
    try {
      const postsData = await axios("/api/posts");

      if (postsData.status === 200) {
        setPosts(postsData.data.posts);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getUsers = async () => {
    try {
      const usersData = await axios("/api/users");

      if (usersData.status === 200) {
        setUsers(usersData.data.users);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <DataContext.Provider value={{ posts, users }}>
      {children}
    </DataContext.Provider>
  );
};
