import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./LoginForm.css";
import styled from "styled-components";
import SubmitButton from "../../reusable-ui/SubmitButton";
import Input from "../../reusable-ui/Input";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme";

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
    <LoginFormStyled onSubmit={handleSubmit}>
      <div>Bienvenuie chez nous</div>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        Icon={<BsPersonCircle />}
      />
      <SubmitButton label={"Connexion"} Icon={<IoChevronForward />} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;

export default LoginForm;
