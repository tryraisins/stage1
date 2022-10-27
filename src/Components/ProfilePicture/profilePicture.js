import React from "react";
import profileimg from "../../assets/profile__img.png";
const ProfilePicture = () => {
  return (
    <div>
      <img
        src={profileimg}
        alt="profile"
        id="profile__img"
        className="mx-auto"
      />
    </div>
  );
};

export default ProfilePicture;
