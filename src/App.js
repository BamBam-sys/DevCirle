import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import Login from "./components/LoginForm";
import UserProfilePage from "./components/UserProfilePage";
import ChangePassword from "./components/ChangePassword";
import UserSearchPage from "./components/UserSearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/userprofilepage">
          <UserProfilePage />
        </Route>
        <Route exact path="/changepassword">
          <ChangePassword />
        </Route>
        <Route exact path="/usersearchpage">
          <UserSearchPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
