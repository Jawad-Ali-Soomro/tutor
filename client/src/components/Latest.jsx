import "../styles/latest.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const Latest = () => {
  const navigate = useNavigate()
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
        "https://m.media-amazon.com/images/I/513NdzH2XvL._SY1200_SX1200_.jpg",
      name: "The God Of Woods.",
      price: 4200,
      category: "Kindle Edition",
      author: "Liz Moore.",
    },
    {
      image: "https://m.media-amazon.com/images/I/41xBkE-i2oL.AC_SX500.jpg",
      name: "James. A Novel",
      price: 4299,
      category: "Poetry",
      author: "Percival Everett",
    },
    {
      image: "https://m.media-amazon.com/images/I/81a+669WiRL._SY466_.jpg",
      name: "Fire Exit",
      price: 2499,
      category: "Novel",
      author: "Morgan Talty",
    },
    {
      image:
        "https://www.tariqbooks.com/cdn/shop/files/FrankWood_sBusinessAccountingVolume1_14thedition_720x.webp?v=1715768793",
      name: "Business Accounting",
      price: 1700,
      category: "Business",
      author: "Frank Wood",
    },
    {
      image:
        "https://www.tariqbooks.com/cdn/shop/files/ComputerScienceA-LevelPastPaper2TopicalWorkbook.png?v=1698842020",
      name: "Computer Science.",
      price: 2499,
      category: "Computer Science",
      author: "Topical Workbook",
    },
  ];
  return (
    <div className="latest-container flex col">
      <div className="latest-wrapper flex">
        {booksData?.map((book) => {
          return (
            <div className="book-card flex col" key={book.name}>
              <img onClick={() => navigate('/book/12') + window.location.reload()} src={book.image} alt="" />
              <p className="author name">{book?.author}</p>
              <p className="name">{book?.name}</p>
              <p className="price name">PKR.{book?.price}</p>
              <div className="category flex">{book?.category}</div>
              <div className="btns flex">
                <button className="flex">Buy Now</button>
                <button className="flex">
                  <MdOutlineBookmarkAdd />
                </button>
              </div>
            </div>
          );
        })}
      </div>
        {/* <div className="pagination flex">
          <div className="icon flex">
            <GrLinkPrevious />
          </div>
          <div className="icon flex">
            <GrLinkNext />
          </div>
          <button>View  all</button>
        </div> */}
    </div>
  );
};

export default Latest;
