import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginAsync } from "../redux/action/loginAction";
import style from "../styles/login.module.css";
import { getUser } from "../utility/Common";
import NavBar from "./Navbar";

const Login = () => {
  const { error } = useSelector((state) => state.login);

  // const data = getUser();

  const dispatch = useDispatch();
  const history = useHistory();

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
    setLoginData({
      email: "",
      password: "",
    });

    history.push("/profilepage");
  }

  return (
    <>
      <NavBar />
      <section className={style.section}>
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
            <h1 className={style.formTitle}>Log In</h1>

            <div>
              <input
                className={style.formInput}
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className={style.formInput}
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={style.formButton}>
              Submit
            </button>
            <h4>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </h4>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
