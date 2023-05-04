import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );

  {
    /* localhost.com/ */
  }
  {
    /* localhost.com/checkout */
  }
  {
    /* localhost.com/login */
  }
}

export default App;
