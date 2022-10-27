import React from "react";
// import Icon from "../../Components/Icon/icon.js";
import ProfilePicture from "../../Components/ProfilePicture/profilePicture.js";
import Slack from "../../Components/Slack/slack.js";
import "./profile.css";
const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <ProfilePicture />
          {/* <div className="position-absolute top-0 end-0">
            <Icon />
          </div> */}
        </div>
        <div className="row">
          <Slack />
        </div>
      </div>
    </section>
  );
};

export default Profile;
