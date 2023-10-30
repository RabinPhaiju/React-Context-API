import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransactions";
import NotFound from "./components/notfound/NotFound";

import { ExpenseProvider } from "./context/expense/expenseState";
import { UserProvider } from "./context/user/userState";

import FeedbackForm from "./components/feedback/FeedbackForm"
import FeedbackStats from "./components/feedback/FeedbackStats"
import FeedbackList from "./components/feedback/FeedbackList"
import About from "./components/About"

import "./App.css";
import { FeedbackProvider } from "./context/feedback/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
    <UserProvider>
      <ExpenseProvider>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' exact element={<TransactionList/>} />
              <Route path='/add' element={<AddTransaction/>} />

              <Route path='/feedback' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
              ></Route>
              <Route path='/about/:id/:name' element={<About />} />

              <Route element={<NotFound/>} />
            </Routes>
          </div>
        </Router>
      </ExpenseProvider>
    </UserProvider>
    </FeedbackProvider>
  );
}

export default App;
