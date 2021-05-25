import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransactions";
import NotFound from "./components/notfound/NotFound";

import { ExpenseProvider } from "./context/expense/expenseState";
import { UserProvider } from "./context/user/userState";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <ExpenseProvider>
        <Router>
          <Header />
          <div className='container'>
            <Balance />
            <IncomeExpenses />
            <Switch>
              <Route path='/' exact component={TransactionList} />
              <Route path='/add' exact component={AddTransaction} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </ExpenseProvider>
    </UserProvider>
  );
}

export default App;
