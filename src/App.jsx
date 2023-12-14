import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import React from "react";
import OrderPage from "./components/pages/order/OrderPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  // State to store the input value

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
