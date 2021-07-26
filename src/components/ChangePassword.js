import React from 'react'

const ChangePassword = () => {
    return (
        <div>
             <div className="edit-password">
        <div className="user-prof">
            <img src="img/Screenshot (11).png" className="person" alt="" srcset="" />
            <h5 className="name">Iroh Nkechi</h5>
        </div>
       <div className="edit-page">
        <div className="main-edit">
            <h4 className="pass">Old Password</h4>
            <input type="password" name="old-password" className="password old"/>
        </div>
          <div className="main-edit">
              <h4 className="pass">New Password</h4>
              <input type="password" name="new-password" className="password new"/>
          </div>
          <div className="main-edit">
            <h4 className="pass"> Confirm New <br/>Password</h4>
            <input type="password" name="confirm-password" className="password confirm" />
        </div>
       </div>
       <div className="button">
        <button type="submit" className="change-password">Change Password</button>
        <a href="" className="forgot-password">Forgot Password?</a>
       </div>
    </div>
        </div>
    )
}

export default ChangePassword
