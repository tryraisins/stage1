import React from "react";
import slack from "../../assets/slack.png";
import github from "../../assets/github.png";
const SocialLinks = () => {
  return (
    <div>
      <img src={slack} alt="slack" className="me-4" />
      <img src={github} alt="github" />
    </div>
  );
};

export default SocialLinks;
