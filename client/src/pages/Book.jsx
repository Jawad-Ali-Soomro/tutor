import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/book.scss";
import { FaOpencart } from "react-icons/fa6";
import Latest from "../components/Latest";

const Book = () => {
  const bookId = useParams().bookId;
  const [bookData, setBookData] = useState({
    image:
      "https://booksvilla.com.pk/cdn/shop/files/Screenshot-20231125-210728_Instagram_1200x.jpg?v=1700928810",
    name: "Maala",
    price: 2499,
    category: "Poetry",
    author: "Nimra Ahmed",
    description:
      "Maala is a captivating book that weaves a tale of love, sacrifice, and resilience. Set against a rich cultural backdrop, it explores the complexities of human emotions and relationships. With vivid storytelling and relatable characters, Maala takes readers on a journey of self-discovery, making it a compelling read for anyone seeking a deeply emotional and thought-provoking story.",
    year: "January 1, 2023",
    isbn: "B0CP2M71Y7", 
    seller: "Zanjabeel",
  });
  return (
    <div className="book-main flex col">
      <div className="top-details-container flex">
        <div className="left-image flex">
          <img src={bookData?.image} alt="" />
        </div>
        <div className="right-details flex col">
          <h1>{bookData?.name}</h1>
          <h2>{bookData?.author}</h2>
          <div className="cat flex">{bookData?.category}</div>
          <p>{bookData?.description}</p>
          <div className="more-details flex col">
            
            <div className="year flex">
              <p>{bookData?.year    }</p>
            </div>
            <div className="year price flex">
              <p>ISBN. {bookData?.isbn}</p>
            </div>
            <div className="year price flex">
              <p>PKR. {bookData?.price}</p>
            </div>
            <div className="cart-icons flex">
                <div className="icon flex">
                    <FaOpencart />
                </div>
                <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <Latest />
    </div>
  );
};

export default Book;
