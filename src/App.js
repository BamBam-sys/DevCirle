// import logo from "./logo.svg";
// import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/LoginForm";
import ProfilePage from "./components/ProfilePage";
import ChangePassword from "./components/ChangePassword";
import SearchPage from "./components/SearchPage";
import Editprofile from "./components/Editprofile";
import UserProfile from "./components/UserProfile";
import NavBar from "./components/Navbar";
import {io} from "socket.io-client";

const socket = io(`http://localhost:6000`)

const openChat = () => {
  const userInfo = "blank" //feed in logged in user details
  socket.emit("openChat", userInfo)
}

function App() {

  useEffect(() => {    //Adds socket/io listener once front end application is rendered
    openChat();
   }, [])

  return (
    <div className="App">
      {/* <Editprofile /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={Login} />
          <Route path="/profilepage" component={ProfilePage} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/searchpage" component={SearchPage} />
          <Route path="/userprofile/:id" component={UserProfile} />
          <Route exact path="/chats" component={AllChatHistory}></Route>
          <Route exact path="/chats/:id/sendTo/:id" component={Chat}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
