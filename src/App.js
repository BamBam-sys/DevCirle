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
      {/* <Editprofile /> */}
      <Router>
        <Route path="/home" component={Homepage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userprofilepage" component={UserProfilePage} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/searchpage" component={SearchPage} />
      </Router>
    </div>
  );
}

export default App;
