import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/expense/expenseState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, editTransaction } = useContext(ExpenseContext);
  const [editAmount, setEditAmount] = useState(false);
  const [ammount, setAmount] = useState(0);

  const sign = transaction.amount < 0 ? "-" : "+";

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditAmount(false);
      editTransaction(transaction.id, transaction.text, ammount);
    }
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      {editAmount ? (
        <span>
          <input
            type='number'
            style={{ width: "100px", height: "26px" }}
            value={transaction.ammount}
            onChange={(e) => setAmount(parseInt(sign + e.target.value))}
            onKeyDown={_handleKeyDown}
          />
        </span>
      ) : (
        <span onDoubleClick={() => setEditAmount(true)}>
          {sign}
          {moneyFormatter(transaction.amount)}
        </span>
      )}

      <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>
        x
      </button>
    </li>
  );
};
