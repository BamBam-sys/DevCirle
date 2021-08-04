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
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Editprofile /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={Login} />
          <Route path="/userprofilepage" component={UserProfilePage} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/searchpage" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
