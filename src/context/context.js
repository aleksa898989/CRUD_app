import { useReducer, createContext } from "react";
import MyAppReducer from "./reducer";

const initialState = {
  users: [],
  posts: [],
};

export const Context = createContext(initialState);

export const GlobalContextProviderComponent = ({ children }) => {
  const [state, dispatch] = useReducer(MyAppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const removePost = (id) => {
    dispatch({
      type: "REMOVE_POST",
      payload: id,
    });
  };
  const addPost = (post) => {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  };
  const editPost = (user) => {
    dispatch({
      type: "EDIT_POST",
      payload: user,
    });
  };
  return (
    <>
      <Context.Provider
        value={{
          users: state.users,
          posts: state.posts,
          editUser,
          addUser,
          removeUser,
          editPost,
          addPost,
          removePost,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default Context;
