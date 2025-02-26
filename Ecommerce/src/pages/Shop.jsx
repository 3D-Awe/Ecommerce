import React, { useState, useContext } from "react";
import "./Shop.scss";
import veggies from "./veggies.json";
import { BasketContext } from "./Context.jsx";

const Shop = () => {
  const { AddToBasket } = useContext(BasketContext);
  return (
    <div className="Shop">
      <header>
        <h1>Produce</h1>
        <h2>
          <strong>Fresh</strong> - August 21, 2023
        </h2>
        <div className="sorters">
          <button>Default</button>
          <button>A-Z</button>
          <button>List view</button>
        </div>
      </header>
      <hr></hr>
      <div className="Cards">
        {veggies.map((veggie) => (
          <div className="Card" key={veggie.id}>
            <img src={veggie.icon} />
            <div className="info">
              <h1>{veggie.name}</h1>
              <button
                onClick={() => AddToBasket(veggie)}
                className="add-to-cart"
              >
                Add to Cart
              </button>
              <h1 className="price">{veggie.price_per_lb} / lb</h1>
              <h2>Grown in Kirkland, WA</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
