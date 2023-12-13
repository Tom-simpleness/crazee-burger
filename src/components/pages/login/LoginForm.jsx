import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import React from "react";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
