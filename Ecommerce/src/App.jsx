import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Basket from "./pages/Basket.jsx";
import { BasketProvider } from "./pages/Context.jsx";
function App() {
  return (
    <>
      <BasketProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </BasketProvider>
    </>
  );
}

export default App;
