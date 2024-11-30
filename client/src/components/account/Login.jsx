import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  width: 100%;
  max-width: 450px;
  margin: 60px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled("img")`
  width: 100px;
  margin: 20px auto;
  display: block;
  border-radius: 50%;
  border: 4px solid #2874f0;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
  transition: all 0.3s ease;

  &.login {
    background: linear-gradient(90deg, #2874f0, #0056b3);
    color: white;
    &:hover {
      background: linear-gradient(90deg, #0056b3, #2874f0);
    }
  }

  &.signup {
    background: #ffffff;
    color: #2874f0;
    box-shadow: 0 3px 10px rgba(40, 116, 240, 0.2);
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const StyledTextField = styled(TextField)`
  margin: 10px 0;
  .MuiInputBase-root {
    background-color: #f9f9f9;
    border-radius: 10px;
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #2874f0;
    }
    &.Mui-focused fieldset {
      border: 2px solid #2874f0;
    }
  }
`;

const ErrorMessage = styled(Typography)`
  color: #ff4c4c;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const InfoMessage = styled(Typography)`
  color: #6c757d;
  font-size: 14px;
  margin-top: 10px;
`;

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [signup, setSignup] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccountType] = useState("login");
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    let response = await API.userLogin(login);
    setIsLoading(false);

    if (response.isSuccess) {
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setAccount({
        name: response.data.name,
        username: response.data.username,
      });
      isUserAuthenticated(true);
      navigate("/");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    setError("");
    let response = await API.userSignup(signup);
    setIsLoading(false);

    if (response.isSuccess) {
      setSignup({ name: "", username: "", password: "" });
      setAccountType("login");
    } else {
      setError("Signup failed. Please try again later.");
    }
  };

  const toggleAccountType = () => {
    setAccountType(account === "login" ? "signup" : "login");
    setError("");
  };

  return (
    <Container>
      <Logo
        src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png"
        alt="Logo"
      />
      {account === "login" ? (
        <>
          <StyledTextField
            variant="outlined"
            label="Username"
            name="username"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            fullWidth
          />
          <StyledTextField
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            fullWidth
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <StyledButton
            className="login"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </StyledButton>
          <InfoMessage>OR</InfoMessage>
          <StyledButton className="signup" onClick={toggleAccountType}>
            Create an Account
          </StyledButton>
        </>
      ) : (
        <>
          <StyledTextField
            variant="outlined"
            label="Name"
            name="name"
            value={signup.name}
            onChange={(e) => setSignup({ ...signup, name: e.target.value })}
            fullWidth
          />
          <StyledTextField
            variant="outlined"
            label="Username"
            name="username"
            value={signup.username}
            onChange={(e) => setSignup({ ...signup, username: e.target.value })}
            fullWidth
          />
          <StyledTextField
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            value={signup.password}
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
            fullWidth
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <StyledButton
            className="signup"
            onClick={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Signup"}
          </StyledButton>
          <InfoMessage>OR</InfoMessage>
          <StyledButton className="login" onClick={toggleAccountType}>
            Already Have an Account? Login
          </StyledButton>
        </>
      )}
    </Container>
  );
};

export default Login;
