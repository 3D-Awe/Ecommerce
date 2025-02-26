import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../pages/Context.jsx";
import "./Basket.scss";
import veggies from "./veggies.json";

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const [amount, setAmount] = useState([]);

  const removeVeggie = (veggieToRemove) => {
    setBasket(basket.filter((veggie) => veggie.id !== veggieToRemove.id));
  };

  const handleAmountChange = (id, newAmount) => {
    if (newAmount === "") {
      setAmount((prevAmount) =>
        prevAmount.map((veggie) =>
          veggie.id === id ? { ...veggie, amount: "" } : veggie
        )
      );
      return;
    }

    if (
      !isNaN(newAmount) &&
      newAmount >= 0 &&
      newAmount <= 100 &&
      !/^0\d+/.test(newAmount)
    ) {
      setAmount((prevAmount) =>
        prevAmount.map((veggie) =>
          veggie.id === id ? { ...veggie, amount: newAmount } : veggie
        )
      );
    }
  };

  useEffect(() => {
    const addedAmountData = basket.map((veggie) => ({
      ...veggie,
      amount: "1",
    }));
    setAmount(addedAmountData);
  }, [basket]);

  const totalAmount = amount.reduce((acc, veggie) => {
    return acc + parseFloat(veggie.amount || 0);
  }, 0);

  const calculateSubTotals = () => {
    return basket.reduce((accumulator, veggie) => {
      return (
        accumulator +
        parseFloat(veggie.price_per_lb) *
          parseFloat(amount.find((item) => item.id === veggie.id)?.amount || 1)
      );
    }, 0);
  };

  const resultShipping = Number(totalAmount * 0.93).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let understandable = totalAmount
    ? Number(totalAmount * 0.93).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0";

  const resultSubtotal = Number(calculateSubTotals()).toLocaleString(
    undefined,
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  const resultTax = Number(resultSubtotal * 0.05).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const resultTotal = Number(
    parseFloat(resultSubtotal) +
      parseFloat(understandable) +
      parseFloat(resultTax)
  ).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="Basket">
      <header>
        <h1>Basket</h1>
        <h2>{basket.length} items</h2>
      </header>
      <hr />
      <section>
        <div className="twoColumns">
          <div className="Cards">
            {basket.map((veggie) => (
              <div className="Card" key={veggie.id}>
                <img src={veggie.icon} alt="Veggie icon" />
                <div className="info">
                  <h1>{veggie.name}</h1>
                  <h1 className="price">{veggie.price_per_lb} / lb</h1>

                  <div className="input-container">
                    <input
                      type="number"
                      value={
                        amount.find((item) => item.id === veggie.id)?.amount ||
                        ""
                      }
                      onChange={(e) => {
                        const newAmount = e.target.value;

                        if (newAmount === "") {
                          handleAmountChange(veggie.id, "");
                        } else {
                          handleAmountChange(veggie.id, newAmount);
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          handleAmountChange(veggie.id, "1");
                        }
                      }}
                      max={100}
                      min={0}
                      step={1}
                    />
                    <span className="unit">lb</span>
                    <img
                      src="./penIcon.png"
                      alt="Search Icon"
                      className="icon"
                    />
                  </div>
                </div>
                <button
                  className="removeButton"
                  onClick={() => removeVeggie(veggie)}
                >
                  Remove
                </button>
                <h1 className="totalOfThis">
                  $
                  {(
                    parseFloat(veggie.price_per_lb) *
                    parseFloat(
                      amount.find((item) => item.id === veggie.id)?.amount || 1
                    )
                  ).toFixed(2)}
                </h1>
              </div>
            ))}
          </div>

          <div className="summary">
            <div className="row">
              <div className="details">
                <h1>
                  <strong>Order summary</strong>
                </h1>
                <h2 className="price">Subtotal</h2>
                <h2>Shipping</h2>
                <h2>Tax</h2>
                <h2>
                  <strong>Total</strong>
                </h2>
              </div>
              <div className="costs">
                <h2 className="price">${resultSubtotal}</h2>
                <h2>${resultShipping}</h2>
                <h2>${resultTax}</h2>
                <h2>${resultTotal}</h2>
                <h2>
                  <strong></strong>
                </h2>
              </div>
            </div>

            <button className="Continue">Continue to payment</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Basket;
