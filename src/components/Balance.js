import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

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

export const Balance = () => {
  const { transactions, users } = useContext(GlobalContext);
  // console.log(transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div style={balanceStyle}>
      <div>
        <h4>Your Balance</h4>
        {users[0] && <h1>{users[0].name}</h1>}
      </div>
      <h1>{moneyFormatter(total)}</h1>
    </div>
  );
};

const balanceStyle = {
  display: "flex",
  justifyContent: "space-around",
};
