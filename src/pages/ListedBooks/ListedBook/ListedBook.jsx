import React from "react";
import { BsPeople } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";

const ListedBook = ({ book }) => {
  const { bookName, author, tags, category, image, publisher, rating, totalPages, yearOfPublishing } =
    book || {};
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm mb-5 p-5">
      <figure className="h-80 bg-emerald-50 rounded-2xl">
        <img className="p-7" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex py-5">
          <p className="font-bold text-[17px]">Tag</p>
          {tags.map((tag, index) => (
            <p key={index} className="text-emerald-500">
              #{tag}
            </p>
          ))}
          <div className="flex items-center">
            <IoLocationOutline className="text-xl" />
            <p className="ml-3">Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex border-b-2 pb-5">
          <div className="flex items-center mr-10">
            <BsPeople className="text-xl mr-3" />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center">
            <MdOutlineFindInPage className="text-xl mr-3" />
            <p>Pages {totalPages}</p>
          </div>
        </div>
        <div className="flex gap-5 mt-2">
          <span className="bg-blue-100 text-blue-500 py-2 px-5 rounded-full">Category: {category}</span>
          <span className="bg-orange-50 text-orange-500 py-2 px-5 rounded-full">Rating: {rating}</span>
          <button className="btn btn-success text-white rounded-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
