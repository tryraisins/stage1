import React from "react";
import BackgroundCheck from "../../Components/BackgroundCheck/backgroundCheck";
import Books from "../../Components/Books/books";
import BooksDesign from "../../Components/BooksDesign/booksDesign";
import BooksPython from "../../Components/BooksPython/booksPython";
import Zuri from "../../Components/Zuri/zuri";
import "./link.css";
const Links = () => {
  return (
    <div>
      <Zuri />
      <Books />
      <BooksPython />
      <BackgroundCheck />
      <BooksDesign />
    </div>
  );
};

export default Links;
