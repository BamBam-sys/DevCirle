import React from "react";
import styles from "../styles/currentuserprofile.module.css";
import { FaEnvelope } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import CardImage from "../images/avatar.jpg";

function CurrentUserProfile() {
  return (
    <>
      <div className={styles.row}>
        <img src={CardImage} alt="under" className={styles.circle} />
        <h3 className={styles.biggy}>
          <b>Olanrewaju Pelumi</b>
          <span className={styles.paschal}>
            <b>Age:24</b>
          </span>
        </h3>
        <h3 className={styles.bant}>
          <b>Front-End Developer</b>
        </h3>
        <div className={styles.icons}>
          <span className={styles.tog}>
            <span className={styles.dones}>
              <a href="#" className={styles.lola}>
                <FaEnvelope />
              </a>
            </span>
            <span className={styles.done}>
              <FaThumbsUp />
            </span>
          </span>
          <h3 className={styles.tag}>
            <b>
              <span>Message</span>
              <span className={styles.like}>Like</span>
            </b>
          </h3>
        </div>
        <div className={styles.about}>
          <h3 className={styles.head}>
            <b>About:</b>
          </h3>
          <h4 className={styles.cohort}>
            {" "}
            I am a FrontEnd Developer with adequate skills in
            Html,Css,JavaScript,React and Few Databases
          </h4>
        </div>
        <div className={styles.recent}>
          <h3 className={styles.head}>
            <b>Recent:</b>
          </h3>
          <ul className={styles.greek}>
            <li>
              <h3>
                <a href="#" className={styles.link}>
                  First Project
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#" className={styles.link}>
                  Second Project
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#" className={styles.link}>
                  Third Project
                </a>
              </h3>
            </li>
          </ul>
          <button className={styles.btn}>
            <a href="#" className={styles.obama}>
              View More
            </a>
          </button>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.head}>
            <b>Contact me:</b>
          </h3>
          <ul className={styles.greek}>
            <li>
              <h4 className={styles.software}>
                <a href="#" className={styles.link}>
                  Github
                </a>
              </h4>
            </li>
            <li>
              <h4 className={styles.softwares}>
                <a href="#" className={styles.link}>
                  Facebook
                </a>
              </h4>
            </li>
            <li>
              <h4 className={styles.softwar}>
                <a href="#" className={styles.link}>
                  LinkedIn
                </a>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default CurrentUserProfile;
