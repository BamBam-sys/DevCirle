import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { signupAsync } from "../redux/action/signUpAction";
import style from "../styles/signup.module.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const SignUpComponent = () => {
  const history = useHistory();

  const data = useSelector((state) => state.signup.data);

  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    github: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormChanges = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // const validateInfo = (values) => {
  //   let errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "First Name is required";
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = "Last Name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (!values.github) {
  //     errors.github = "Link to GitHub is required";
  //   }
  //   if (!values.gender) {
  //     errors.gender = "Gender is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password needs to be 6 characters or more";
  //   }

  //   if (!values.confirmPassword) {
  //     errors.confirmPassword = "Password is required";
  //   } else if (values.password !== values.confirmPassword) {
  //     errors.password = "Passwords do not match";
  //   }
  //   return errors;
  // };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const passwordMatch = validateCP();
    if (!passwordMatch.isMatch) {
      return setErrors(passwordMatch);
    }
    dispatch(signupAsync(signupData));

    history.push(`/profilepage`);

    // const errors = validateInfo(signupData);
    // if (Object.entries(errors).length === 0) {
    //   return dispatch(signupAsync(signupData));
    // }
    // return setErrors(errors);
  };

  return (
    <>
      <Navbar />
      <section className={style.section}>
        <div
          className={`${style.form} ${
            Object.entries(errors).length ? style.lform : ""
          }`}
        >
          <form onSubmit={handleSubmit} error={errors}>
            <h1 className={style.formTitle}>Sign Up</h1>
            <div>
              <input
                className={style.formInput}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={signupData.firstname}
                onChange={handleFormChanges}
              />
            </div>
            {errors.firstName && <span>{errors.firstName}</span>}
            <div>
              <input
                className={style.formInput}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={signupData.lastname}
                onChange={handleFormChanges}
              />
            </div>
            {errors.lastName && <span>{errors.lastName}</span>}
            <div>
              <input
                className={style.formInput}
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleFormChanges}
              />
            </div>
            {errors.email && <span>{errors.email}</span>}
            <div>
              <input
                className={style.formInput}
                type="text"
                name="github"
                placeholder="GitHub Link"
                value={signupData.githubLink}
                onChange={handleFormChanges}
              />
            </div>
            {errors.github && <span>{errors.github}</span>}
            <div onChange={handleFormChanges}>
              Gender
              <br />
              <select name="gender">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {errors.gender && <span>{errors.gender}</span>}
            <div>
              <input
                className={style.formInput}
                type="password"
                placeholder="Password"
                name="password"
                value={signupData.password}
                onChange={handleFormChanges}
              />
            </div>
            {errors.password && <span>{errors.password}</span>}
            <div>
              <input
                className={style.formInput}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleFormChanges}
              />
            </div>
            {/* {errors.passwordMatch.cPassword && (
              <span>{errors.passwordMatch.cPassword}</span>
            )} */}
            <button type="submit" className={style.formButton}>
              Submit
            </button>
            <h4>
              Already have an account? <Link to="/login">Log In</Link>
            </h4>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUpComponent;
