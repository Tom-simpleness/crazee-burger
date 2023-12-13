import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import React from "react";
import OrderPage from "./components/pages/order/OrderPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  // State to store the input value

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:name" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
