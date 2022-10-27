import React from "react";
import profileimg from "../../assets/profile__img.png";
const ProfilePicture = () => {
  return (
    <img src={profileimg} alt="profile" id="profile__img" className="mx-auto" />
  );
};

export default ProfilePicture;
