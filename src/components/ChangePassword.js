import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAsync } from "../redux/action/ChangePasswordAction";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setChangePassword({
      ...changePassword,
      [name]: value,
    });
  };

  const validateChangePassword = () => {
    if (changePassword.newPassword === changePassword.confirmNewPassword) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordMatch = validateChangePassword();

    if (!passwordMatch.isMatch) {
      return setError({
        ...error,
        passwordMatch,
      });
    }
    dispatch(changePasswordAsync(changePassword));
  };

  useSelector((state) => console.log(state.changePassword));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="edit-password">
          <div className="user-prof">
            <img src="img/Screenshot (11).png" className="person" alt="" />
            <h5 className="name">Iroh Nkechi</h5>
          </div>
          <div className="edit-page">
            <div className="main-edit">
              <h4 className="pass">Old Password</h4>
              <input
                type="password"
                name="oldPassword"
                className="password old"
                onChange={handleChange}
              />
            </div>
            <div className="main-edit">
              <h4 className="pass">New Password</h4>
              <input
                type="password"
                name="newPassword"
                className="password new"
                onChange={handleChange}
              />
            </div>

            <div className="main-edit">
              <h4 className="pass">
                Confirm New <br />
                Password
              </h4>
              <input
                type="password"
                name="confirmNewPassword"
                className="password confirm"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="button">
            <button type="submit" className="change-password">
              Change Password
            </button>
            <a href="" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
