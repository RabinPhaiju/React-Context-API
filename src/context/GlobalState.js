import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
  users: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const getTransactions = async () => {
      const transactionsJson = await fetchTransactions();
      dispatch({
        type: "FETCH_TRANSACTION",
        payload: transactionsJson,
      });
    };
    const getUsers = async () => {
      const usersJson = await fetchUsers();
      dispatch({
        type: "FETCH_USER",
        payload: usersJson,
      });
    };
    getUsers();
    getTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await fetch("http://localhost:3004/transactions");
    const data = await res.json();
    return data;
  };
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3004/users");
    const data = await res.json();
    return data;
  };

  // Actions
  const deleteTransaction = async (id) => {
    await fetch(`http://localhost:3004/transactions/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const editTransaction = async (id, text, amount) => {
    await fetch(`http://localhost:3004/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, text, amount }),
    });
    dispatch({
      type: "EDIT_TRANSACTION",
      payload_id: id,
      payload_amount: amount,
    });
  };

  const addTransaction = async (transaction) => {
    const res = await fetch("http://localhost:3004/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const data = await res.json();
    dispatch({
      type: "ADD_TRANSACTION",
      payload: data,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        users: state.users,
        deleteTransaction,
        editTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
