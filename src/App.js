// import logo from "./logo.svg";
// import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/LoginForm";
import UserProfilePage from "./components/UserProfilePage";
import ChangePassword from "./components/ChangePassword";
import SearchPage from "./components/SearchPage";
import Editprofile from "./components/Editprofile";

function App() {
  return (
    <div className="App">
      <Editprofile />
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
        <Route exact path="/searchpage">
          <SearchPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
