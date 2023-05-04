import React from "react";
import Product from "./Product";
import "./Styles/Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* product id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id="12321342"
            title="The name of the wind
            The Kingkiller Chronicle 1"
            price={14.3}
            rating={5}
            image="https://media.s-bol.com/qxxkXmDzMDNG/780x1200.jpg"
          />

          <Product
            id="12321341"
            title="The Wise Man's Fear"
            price={11.79}
            rating={2}
            image="https://media.s-bol.com/Brgj4VgL97XX/781x1200.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321343"
            title="A Court of Thorns and Roses - Sarah J. Maas"
            price={21.21}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg"
          />

          <Product
            id="12321344"
            title="A Court of Mist and Fury - Sarah J. Maas"
            price={63.21}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg"
          />

          <Product
            id="12321345"
            title="A Court of Wings and Ruin"
            price={8.21}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321346"
            title="A Court of Frost and Starlights"
            price={16.33}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585622963i/50659471.jpg"
          />
        </div>

        {/* product */}
      </div>
    </div>
  );
}

export default Home;
