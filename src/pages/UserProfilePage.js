import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'

const UserProfilePage = () => {
    return (
        <div>
            <div className="user-profile-box">
        <div className="user-profile " >
            <div className="user-prof-image">
                <img src="img/Screenshot (11).png" alt='' className="user-image" />
                <button className="change-image">Change Image</button>
            </div>
             <div className="user-details">
                <div className="user-mini-details"> 
                    <h4 className="user-name">Iroh Nkechi</h4>
                    <button type="submit" className="message-button" > Edit Profile</button>
                    <h6 className="check-more-button"><i className="fas fa-ellipsis-h"></i></h6>
                </div>
                <div className="user-mini-details details-two"> 
                    <h4 className="job-title">Full Stack Developer</h4>
                </div>
                <div className="user-mini-details details-two"> 
                    <h4 className="user-gender">Female</h4>
                </div>
                <div className="user-mini-details details-two"> 
                  <h4 className="post-count">3 <span className="repo"> repositories</span></h4>
                  <h4 className="likes-count">4 <span className="likes">likes</span> <i class="fas fa-thumbs-up"></i></h4>
                  <h4 className="my-connect">4 <span className="connect">connect</span></h4>
                </div>
                <div className="user-mini-details details-two"> 
                   <h4 className="github-link">Github link: <a href="https://www.github.com/Iroh-Omolola" className='git-link'>Iroh-Omolola</a></h4>
                  </div>
             </div>
        </div>
        <hr className="user-header-ruler"/>
        <div className="github-posts">
            <h4 className="recent-posts">Recent Repositories</h4>
            <div className="repo-images">
                <div className="repo1">
                    <img src="img/Screenshot (11).png"alt='' className="repo-image" srcset=""/>
                    <h5 className="repo-title">Book Authorization</h5>
                    <h6 className="repo-description">Few description</h6>
                </div>
                <div className="repo1">
                    <img src="img/Screenshot (9).png" alt='' className="repo-image" srcset=""/>
                    <h5 className="repo-title">Book Authorization</h5>
                    <h6 className="repo-description">Few description</h6>
                </div>
                <div className="repo1">
                    <img src="img/Screenshot (4).png" alt='' className="repo-image" srcset=""/>
                    <h5 className="repo-title">Book Authorization</h5>
                    <h6 className="repo-description">Few description</h6>
                </div>
            </div>
              <a href='https://www.viewmore' className="view-more">View More</a>
        </div>
    </div>
        </div>
    )
}

export default UserProfilePage
