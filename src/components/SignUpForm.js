import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { signupAsync } from "../redux/action/signUpAction";

const SignUpComponent = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    githubLink: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handelFormChanges = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const validateCP = () => {
    if (signupData.password === signupData.confirmPassword) {
      return {
        isMatch: true,
        cPassword: "match",
      };
    }
    return {
      isMatch: false,
      cPassword: "Password does not match",
    };
  };

  //
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const passwordMatch = validateCP();
    if (!passwordMatch.isMatch) {
      return setError({
        ...error,
        passwordMatch,
      });
    }

    //call signup action
    dispatch(signupAsync(signupData));
  };
  useSelector((state) => console.log(state.signup));
  // console.log(error);

  return (
    <div className="wrapper">
      <form className="form-con" onSubmit={handleSubmit}>
        <span className="times">&times;</span>
        <h2 className="signUp">Sign Up</h2>

        <div className="container">
          <div>
            <i className="far fa-user"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="firstname" className="firstname">
                First Name
              </label>
            </div>
            <div className="input">
              <input
                type="text"
                name="firstname"
                className="input"
                placeholder="DevCircle"
                onChange={handelFormChanges}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <i className="far fa-user"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="lastname" className="lastname">
                Last Name
              </label>
            </div>
            <div className="input">
              <input
                type="text"
                name="lastname"
                className="input"
                placeholder="Devloper"
                onChange={handelFormChanges}
              />
            </div>
          </div>
        </div>
        <div className="container">
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
                type="email"
                name="email"
                className="input"
                placeholder="devCircle@gmail.com"
                onChange={handelFormChanges}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <i className="fab fa-github" aria-hidden="true"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="github-link" className="github">
                Github Link
              </label>
            </div>
            <div className="input">
              <input
                type="text"
                name="githubLink"
                className="input"
                placeholder="www.github.com/Dev-Circle"
                onChange={handelFormChanges}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <i className="fas fa-eye"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="password" className="main-password">
                Password
              </label>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="••••••••••••"
                onChange={handelFormChanges}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <i className="fas fa-eye"></i>
          </div>
          <div className="input-con">
            <div className="label">
              <label htmlFor="password" className="confirm">
                Confirm Password
              </label>
            </div>
            <div className="input">
              <input
                type="password"
                name="confirmPassword"
                className="input"
                placeholder="••••••••••••"
                onChange={handelFormChanges}
              />
            </div>
          </div>
        </div>
        <div className="container submit-con">
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

export default SignUpComponent;
