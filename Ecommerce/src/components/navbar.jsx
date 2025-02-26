import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Shop from "../pages/Shop";
import { BasketContext } from "../pages/Context.jsx";
const Navbar = () => {
  const { basket } = useContext(BasketContext);
  return (
    <nav>
      <h1>World Peas</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/newstand">Newstand</Link>
      <Link to="/who-we-are">Who we are</Link>
      <Link to="/my-profile">My profile</Link>
      <Link className="buttonBasket" to="/Basket">
        Basket ({basket.length})
      </Link>
    </nav>
  );
};

export default Navbar;
