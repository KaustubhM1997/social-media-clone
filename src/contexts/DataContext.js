import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); //STORING ALL POSTS FROM THE BACKEND
  const [users, setUsers] = useState([]); //STORING ALL USERS FROM THE BACKEND
  const [bookmarkedPost, setBookmarkedPost] = useState([]); // TO STORE BOOKMARKED POSTS OF LOGGED IN USERS

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

  //FETCHING ALL BOOKMARKS FROM THE BACKEND API

  const getBookmarks = async () => {
    try {
      const bookmarkData = await axios(`/api/users/bookmark`, {
        headers: {
          authorization: token,
        },
      });

      if (bookmarkData.status === 200) {
        setBookmarkedPost(bookmarkData.data.bookmarks);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //FUNCTION TO LET USERS BOOKMARK POSTS

  const addBookmark = async (postId) => {
    // console.log(postId, "HI");
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`, //THE BOOKMARK GETS STORED IN THE BACKEND HERE
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        // console.log(response, "THERE");
        getBookmarks(); //FUNCTION TO FETCH ALL BOOKMARKS FROM BACKEND
      }
    } catch (err) {
      console.error(err);
    }
  };

  //FUNCTION TO LET USERS REMOVE POSTS FROM BOOKMARK

  const removeBookmark = async (postId) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        getBookmarks();
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

  const token = localStorage.getItem("token");

  return (
    <DataContext.Provider
      value={{
        posts,
        users,
        getUsers,
        addBookmark,
        bookmarkedPost,
        removeBookmark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
