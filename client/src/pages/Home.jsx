import { useState } from "react";
import "../styles/home.scss";

const Home = () => {
  const [showCatalogue, setShowCatalogue] = useState(false);

  const imgUrl = [
    "https://booksvilla.com.pk/cdn/shop/files/17667561_314x.jpg?v=1737337099",
    "https://booksvilla.com.pk/cdn/shop/files/15703770_300x.jpg?v=1737336985",
    "https://booksvilla.com.pk/cdn/shop/files/12432220_300x.jpg?v=1737337396",
  ];

  const text = "Books"

  return (
    <section className="home-container flex col">
      <div className="home-wrapper flex col">
        <h1>
          Let's <span>Find</span> Perfect{" "}
          <span className="text-span"
            onMouseEnter={() => setShowCatalogue(true)}
            onMouseLeave={() => setShowCatalogue(false)}
          >
            {text}
          </span>{" "}
          For You.
        </h1>
        <div
          className="catalog flex"
          style={{
            transform: showCatalogue ? "translateX(0)" : "translateX(200%)",
            ...(showCatalogue ? {} : { width: "0px" }),
          }}
        >
          {imgUrl?.map((img, index) => (
            <div className="img-card flex" key={index}>
              <img src={img} alt={`Book ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
