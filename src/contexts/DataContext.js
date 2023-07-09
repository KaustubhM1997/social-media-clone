import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  //FETCHING POSTS FROM BACKEND
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

  //FETCHING USERS FROM BACKEND
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

  const getBookmarks = async () => {
    try {
      const bookmarkData = await axios(`/api/users/bookmark`);

      if (bookmarkData.status === 200) {
        console.log(bookmarkData, "bookmark");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
    getUsers();
    getBookmarks();
  }, []);

  return (
    <DataContext.Provider value={{ posts, users }}>
      {children}
    </DataContext.Provider>
  );
};