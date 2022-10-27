import React from "react";
import ProfilePicture from "../../Components/ProfilePicture/profilePicture.js";
import "./Profile.css";
const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col">
            <ProfilePicture />

            <ProfilePicture />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
