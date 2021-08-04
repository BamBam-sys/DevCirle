import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../redux/action/loginAction";
import style from "../styles/login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({});

  function handleFormChanges(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginAsync(loginData));
  }

  useSelector((state) => console.log(state.login));

  return (
    <section className={style.section}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <h1 className={style.formTitle}>Log In</h1>

          <div className={style.formGroup}>
            <input
              className={style.formInput}
              type="email"
              name="Email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleFormChanges}
            />
          </div>

          <div className={style.formGroup}>
            <input
              className={style.formInput}
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleFormChanges}
            />
          </div>

          <button type="submit" className={style.formButton}>
            Submit
          </button>
          <h4>
            Don't have an account? <a href="">Sign Up</a>
          </h4>
        </form>
      </div>
    </section>
  );
};

export default Login;
