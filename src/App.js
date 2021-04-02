import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBooks from "./components/AddBooks/AddBooks";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import ManageBook from "./components/ManageBook/ManageBook";
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addBooks">
            <AddBooks />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/manageBook">
            <ManageBook />
          </Route>
          <Route path="/addBook">
            <AddBooks />
          </Route>
          <PrivateRoute path="/order">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:bookId">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
