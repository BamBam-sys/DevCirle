import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { loginAsync } from "../redux/action/loginAction";

const Login = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginAsync(loginData));
  }

  // useSelector((state) => console.log(state.login));

  return (
    <div className="wrapper">
      <form className="form-con formcon2" onSubmit={handleSubmit}>
        <span className="times">&times;</span>
        <h2 className="login">Login</h2>

        <div className="container2">
          <div>
            <i className="far fa-envelope fa-1x"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="email" className="email">
                Email
              </label>
            </div>
            <div className="input">
              <input
                type="text"
                name="email"
                className="input"
                placeholder="devCircle@gmail.com "
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="container2">
          <div>
            <i className="fas fa-eye"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="password" className="password">
                Password
              </label>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="••••••••••••"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="container2 submit-con">
          <button
            type="submit"
            name=""
            className="submit"
            value="Create Account"
          >
            Submit{" "}
          </button>
        </div>

        <div className="container below-submit">
          <p>Already have an account? </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
