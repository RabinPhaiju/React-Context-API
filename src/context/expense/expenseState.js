import React, { useReducer, useEffect, createContext } from "react";
import expenseReducer from "./expenseReducer";
import {
  TRANSACTION_ADD,
  TRANSACTION_DELETE,
  TRANSACTION_EDIT,
  TRANSACTION_FETCH,
  TRANSACTION_SET_LOADING,
} from "../types";

// Initial state
const initialState = {
  transactions: [],
  tran_loading: false,
};

// Create context
export const ExpenseContext = createContext(initialState);

// Provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  useEffect(() => {
    const getTransactions = async () => {
      setLoading();
      const transactionsJson = await fetchTransactions();
      dispatch({
        type: TRANSACTION_FETCH,
        payload: transactionsJson,
      });
    };
    getTransactions();
  }, []);

  // Set loading
  const setLoading = () => dispatch({ type: TRANSACTION_SET_LOADING });

  const fetchTransactions = async () => {
    const res = await fetch("http://localhost:3004/transactions");
    const data = await res.json();
    return data;
  };

  // Actions
  const deleteTransaction = (id) => {
    fetch(`http://localhost:3004/transactions/${id}`, {
      method: "DELETE",
    }).then(()=>{
      dispatch({
        type: TRANSACTION_DELETE,
        payload: id,
      });
    })
  };

  const editTransaction =(id, text, amount) => {
    fetch(`http://localhost:3004/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, text, amount }),
    }).then(()=>{
      dispatch({
        type: TRANSACTION_EDIT,
        payload_id: id,
        payload_amount: amount,
      });
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
      type: TRANSACTION_ADD,
      payload: data,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        tran_loading: state.tran_loading,
        deleteTransaction,
        editTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
