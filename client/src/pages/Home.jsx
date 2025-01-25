import "../styles/home.scss";
import { WiStars } from "react-icons/wi";
import { RiScrollToBottomLine } from "react-icons/ri";
import Latest from "../components/Latest";

const Home = () => {

  
  const imgUrl = [
    "https://booksvilla.com.pk/cdn/shop/files/17667561_314x.jpg?v=1737337099",
    "https://booksvilla.com.pk/cdn/shop/files/15703770_300x.jpg?v=1737336985",
    "https://booksvilla.com.pk/cdn/shop/files/12432220_300x.jpg?v=1737337396",
  ];


  const text = "Books";

  return (
    <section className="home-container flex col">
      <div className="home-wrapper flex col">
        <h1>
          Let's find the <span>Perfect</span>{" "}
          <span className="text-span">
            <div className="stars flex">
              <WiStars />
            </div>
            {text}
          </span>{" "}
          for you.
        </h1>
        <div className="catalog flex">
          {imgUrl?.map((img, index) => (
            <div className="img-card flex" key={index}>
              <img src={img} alt={`Book ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="scroll flex">
          <div className="icon-scroll flex">
            <RiScrollToBottomLine className="animated-icon" />
          </div>
          <p>Scroll Down</p>
        </div>
      </div>
      {/* <div className="categories flex">
        <div className="cat-wrapper flex bw">
        {
        bookCategories?.map((cat) => {
          return <div className="cat-card flex col" key={cat?.name}>
            <img src={cat?.image} alt="" />
            <div className="name-cat flex">
              {cat?.name}
            </div>
          </div>
        })
        }
        </div>
      </div> */}
      <Latest />
    </section>
  );
};

export default Home;
