import "../styles/latest.scss";
import { BsCartPlus } from "react-icons/bs";

const Latest = () => {
  const booksData = [
    {
      image:
        "https://booksvilla.com.pk/cdn/shop/files/Screenshot-20231125-210728_Instagram_1200x.jpg?v=1700928810",
      name: "Maala",
      price: 2499,
      category: "Poetry",
      author: "Nimra Ahmed",
    },
    {
      image:
        "https://booksvilla.com.pk/cdn/shop/files/12432220_1200x.jpg?v=1737337396",
      name: "The False Prince",
      price: 2499,
      category: "Fantasy",
      author: "Jennifer A.Neilsen",
    },
    {
      image:
        "https://booksvilla.com.pk/cdn/shop/products/27883214_1200x.jpg?v=1662453659",
      name: "Caraval",
      price: 2499,
      category: "Business",
      author: "Stephanie Garber",
    },
    {
      image:
        "https://booksvilla.com.pk/cdn/shop/products/51n-q69gn4L_2000x.jpg?v=1661231305",
      name: "Master Your Emotions",
      price: 2499,
      category: "Psychology",
      author: "Thibaut Meurisse",
    },
    {
        image:
          "https://booksvilla.com.pk/cdn/shop/files/Screenshot-20231125-210728_Instagram_1200x.jpg?v=1700928810",
        name: "Maala",
        price: 2499,
        category: "Poetry",
        author: "Nimra Ahmed",
      },
      {
        image:
          "https://booksvilla.com.pk/cdn/shop/files/12432220_1200x.jpg?v=1737337396",
        name: "The False Prince",
        price: 2499,
        category: "Fantasy",
        author: "Jennifer A.Neilsen",
      },
      {
        image:
          "https://booksvilla.com.pk/cdn/shop/products/27883214_1200x.jpg?v=1662453659",
        name: "Caraval",
        price: 2499,
        category: "Business",
        author: "Stephanie Garber",
      },
      {
        image:
          "https://booksvilla.com.pk/cdn/shop/products/51n-q69gn4L_2000x.jpg?v=1661231305",
        name: "Master Your Emotions",
        price: 2499,
        category: "Psychology",
        author: "Thibaut Meurisse",
      },
  ];
  return (
    <div className="latest-container flex">
      <div className="latest-wrapper flex">
        {booksData?.map((book) => {
          return (
            <div className="book-card flex col" key={book.name}>
              <img src={book.image} alt="" />
              <p className="author name">{book?.author}</p>
              <p className="name">{book?.name}</p>
              <p className="price name">PKR.{book?.price}</p>
              <div className="category flex">{book?.category}</div>
              <div className="btns flex">
                <button>Buy Now</button>
                <button><BsCartPlus /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
