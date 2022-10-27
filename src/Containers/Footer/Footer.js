import React from "react";
import zuri from "../../assets/zuri_logo.png";
const Footer = () => {
  return (
    <section className="footer container">
      <div className=" zuri-footer">
        <div className="row">
          <img src={zuri} alt="zuri logo" className="zuri-logo col-6" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
