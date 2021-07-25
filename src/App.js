import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignUpForm from './components/SignUpForm';
import Login from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
