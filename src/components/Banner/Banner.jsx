import React from "react";
import booksImage from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-emerald-50 rounded-2xl my-10 py-20">
      <div className="px-28">
        <h1 className="text-black text-4xl font-bold">Books to freshen up your bookshelf</h1>
        <button className="btn btn-success text-white mt-5 text-xl font-semibold">View The List</button>
      </div>
      <div>
        <img src={booksImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
