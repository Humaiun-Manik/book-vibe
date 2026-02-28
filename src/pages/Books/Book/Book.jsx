import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, category, image, rating, tags } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border rounded-xl p-5">
      <figure className="bg-emerald-50 rounded-xl py-10">
        <img className="h-41.5 w-31" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="border-b-2 border-dotted pb-3">
          <div className="flex mb-3">
            {tags.map((tag, index) => (
              <p key={index} className="text-emerald-400">
                {tag}
              </p>
            ))}
          </div>

          <h2 className="card-title text-2xl mb-2">{bookName}</h2>
          <p>By : {author}</p>
        </div>
        <div className="card-actions justify-between">
          <div className="badge p-0">{category}</div>
          <div className="badge p-0">
            {rating}
            <FaRegStar className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
