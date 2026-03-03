import React, { useMemo } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import ListedBook from "./ListedBook/ListedBook";

const ListedBooks = () => {
  const books = useLoaderData();

  const listedBooks = useMemo(() => {
    const storedBooksData = getStoredBook();
    const convertedStoredBooks = storedBooksData.map((id) => parseInt(id));

    return books.filter((book) => convertedStoredBooks.includes(book.bookId));
  }, [books]);

  return (
    <div>
      <h1 className="bg-emerald-50 text-black text-4xl font-bold text-center p-10 rounded-2xl my-10">
        Books
      </h1>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-5">
            {listedBooks.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
