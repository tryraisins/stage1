import React from "react";
import zuri from "../../assets/zuri_logo.png";
import i4g from "../../assets/I4G.png";
const Footer = () => {
  return (
    <section className="footer container">
      <div className=" zuri-footer">
        <div className="row">
          <img
            src={zuri}
            alt="zuri logo"
            className="zuri-logo col-6 col-lg-4"
          />
        </div>
        <div className="row">
          <p className="zuri-logo-title col-lg-4">
            {" "}
            HNG Internship 9 Frontend Task
          </p>
        </div>
        <div className="row">
          <img src={i4g} alt="i4g logo" className="col-6 col-lg-4" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
