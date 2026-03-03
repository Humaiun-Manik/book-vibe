import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const books = useLoaderData([]);
  const { id } = useParams();
  const bId = parseInt(id);
  const book = books.find((book) => book.bookId === bId);
  const {
    bookId,
    bookName,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book || {};

  const handleRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="card lg:card-side gap-10 bg-base-100 shadow-sm w-full my-16">
      <figure className="w-1/2 rounded-2xl bg-emerald-50">
        <img className="p-20" src={image} alt="Album" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title text-5xl">{bookName}</h2>
        <p className="text-xl mt-5">By : {author}</p>
        <p className="border-y-2 text-xl py-5">{category}</p>
        <p className="my-5">
          <span className="font-bold">Review :</span> {review}
        </p>
        <div className="flex border-b-2 py-5">
          <p className="font-bold text-[17px]">Tag</p>
          {tags.map((tag, index) => (
            <p key={index} className="text-emerald-500">
              #{tag}
            </p>
          ))}
        </div>

        <div className="overflow-x-auto text-[17px] my-5">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Number of Pages:</td>
                <td>{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td>{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td>{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td>{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-actions">
          <button onClick={() => handleRead(bookId)} className="btn btn-outline font-bold">
            Read
          </button>
          <button className="btn btn-info">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
