import React from "react";
import BackgroundCheck from "../../Components/BackgroundCheck/backgroundCheck";
import Books from "../../Components/Books/books";
import BooksDesign from "../../Components/BooksDesign/booksDesign";
import BooksPython from "../../Components/BooksPython/booksPython";
import Twitter from "../../Components/Twitter/twitter.js";
import Zuri from "../../Components/Zuri/zuri";
import "./links.css";
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
    </section>
  );
};

export default Links;
