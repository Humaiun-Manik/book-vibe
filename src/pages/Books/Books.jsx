import React from "react";
import Book from "./Book/Book";

const Books = ({ books }) => {
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold mt-20 mb-10">Books</h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
