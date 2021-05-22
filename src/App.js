import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransactions";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <Switch>
            <Route path='/history' exact component={TransactionList} />
            <Route path='/add' exact component={AddTransaction} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
