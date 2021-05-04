import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import CSList from './container/CS/List'
import CSCreate from './container/CS/Create'
import HistoryList from './container/History/List'
import HistoryCreate from './container/History/Create'
import Home from "./container/Home/Home";
import Grid from '@material-ui/core/Grid';
import { UC } from './context/UserContext'
import Login from "./container/Auth/Login";
import BorrowBook from "./container/Transaction/BorrowBook";
import SignUp from "./container/Auth/Register";

export default function App() {


  const [state, setState] = useContext(UC)
  const handleLogout = () => {
    setState({ isLogin: false })
    localStorage.removeItem('userData')
  }
  return (
    <Router>
      <Grid
        container direction="row"
        justify="center"
        alignItems="center"
      >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {state.isLogin == false ?
              (<li>
                <Link to="/signup">Register</Link>
              </li>) : 
              null }
            {state.isLogin == true ?
              (
                <>
                  <li>
                    <Link to="/cs">CS</Link>
                  </li>
                  <li>
                    <Link to="/cs/create">Add CS</Link>
                  </li>
                  <li>
                    <Link to="/history">History</Link>
                  </li>
                  <li>
                    <Link to="/history/create">Add History</Link>
                  </li>
                  <li>
                    <Link to="/tr">View Transactions</Link>
                  </li>
                </>
              ) : null}
            <li>
              {state.isLogin ?
                (<Link onClick={handleLogout}>Logout</Link>) :
                (<Link to="/login">Login</Link>)
              }
            </li>
          </ul>
        </nav>

      </Grid>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/cs" exact>
          <CSList />
        </Route>
        <Route path="/history" exact>
          <HistoryList />
        </Route>
        <Route path="/history/create" exact>
          <HistoryCreate />
        </Route>
        <Route path="/cs/create" exact>
          <CSCreate />
        </Route>
        <Route path="/tr" exact>
          <BorrowBook />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}