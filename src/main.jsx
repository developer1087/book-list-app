import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";

const BookList = () => {
  return (
    <article className="book-list">
      <h1>Best sellers</h1>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
