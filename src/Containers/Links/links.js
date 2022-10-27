import React from "react";
import BackgroundCheck from "../../Components/BackgroundCheck/backgroundCheck";
import Books from "../../Components/Books/books";
import BooksDesign from "../../Components/BooksDesign/booksDesign";
import BooksPython from "../../Components/BooksPython/booksPython";
import SocialLinks from "../../Components/Social Links/SocialLinks";
import Twitter from "../../Components/Twitter/twitter.js";
import Zuri from "../../Components/Zuri/zuri";
const Links = () => {
  return (
    <section className="links container">
      <div className="row">
        <Twitter />
      </div>
      <div className="row">
        <Zuri />
      </div>
      <div className="row">
        <Books />
      </div>
      <div className="row">
        <BooksPython />
      </div>
      <div className="row">
        <BackgroundCheck />
      </div>
      <div className="row">
        <BooksDesign />
      </div>
      <div className="row">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Links;
