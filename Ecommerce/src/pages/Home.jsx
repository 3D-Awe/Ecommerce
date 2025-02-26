import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>
        We're <span>farmers, purveyors,</span> and <span>eaters</span> of <br />
        organically grown food
      </h1>
      <Link to="/shop">
        <button>Browse our shop</button>
      </Link>
      <div className="pics">
        <img src="./image_2025-02-10_22-11-59.png" className="leaf" />
        <img src="./image_2025-02-10_22-12-11.png" className="bread" />
        <h5>
          <strong>Central California — </strong>The person who grew these was
          located in Central California and, er, hopefully very well-
          <br />
          compensated.
        </h5>
      </div>

      <div className="words">
        <strong>WHAT WE BELIEVE</strong>
        <h6>
          We believe in produce. Tasty produce. Produce like:
          <br /> <br /> Apples. Oranges. Limes. Lemons. Guavas. Carrots.
          Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese
          eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes.
          Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger.
          Cherries. Raspberries. Cilantro. Parsley. Dill.
          <br /> <br /> What are we forgetting?
          <br /> <br /> Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some,
          “rocket”). Persian cucumbers, in addition to aforementioned “normal”
          cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures
          call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk
          fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel.
          Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom
          tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear,
          we’re vendors of organic produce, but if you asked us to describe what
          escaroles are...
        </h6>
      </div>
    </div>
  );
};

export default Home;
