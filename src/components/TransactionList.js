import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import spinner from "./spinner.gif";
import { ExpenseContext } from "../context/expense/expenseState";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpense";

export const TransactionList = () => {
  const { transactions, tran_loading } = useContext(ExpenseContext);

  return (
    <div>
      <Balance />
      <IncomeExpenses />  
      <h3>History</h3>
      {tran_loading ? (
        <div style={{ textAlign: "center" }}>
          <img src={spinner} alt='spinner' height='120px' width='120px' />
        </div>
      ) : (
        <ul className='list'>
          {transactions &&
            transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
        </ul>
      )}
    </div>
  );
};
