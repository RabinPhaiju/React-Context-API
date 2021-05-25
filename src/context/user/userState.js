import React, { useReducer, useEffect, createContext } from "react";
import userReducer from "./userReducer";
import { USER_FETCH, USER_SET_LOADING } from "../types";

// Initial state
const initialState = {
  users: [],
  user_loading: false,
};

// Create context
export const UserContext = createContext(initialState);

// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const getUsers = async () => {
      setLoading();
      const usersJson = await fetchUsers();
      dispatch({
        type: USER_FETCH,
        payload: usersJson,
      });
    };
    getUsers();
  }, []);

  // Set loading
  const setLoading = () => dispatch({ type: USER_SET_LOADING });

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3004/users");
    const data = await res.json();
    return data;
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user_loading: state.user_loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
