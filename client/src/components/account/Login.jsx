import React, { useState, useContext } from "react";
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

const BackgroundContainer = styled(Box)`
  background: #264653;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Container = styled(Box)`
  width: 100%;
  max-width: 400px;
  background: rgb(35 5 87);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Logo = styled("img")`
  width: 80px;
  margin: 20px auto;
  display: block;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 15px 0;
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
  transition: all 0.4s ease;

  &.login {
    background: linear-gradient(90deg, #007aff, #0056e8);
    color: white;
    &:hover {
      background: linear-gradient(90deg, #0056e8, #007aff);
    }
  }

  &.signup {
    background: transparent;
    color: #007aff;
    border: 2px solid #007aff;
    &:hover {
      background: #f0f4ff;
    }
  }
`;

const StyledTextField = styled(TextField)`
  margin: 12px 0;
  .MuiInputBase-root {
    background-color: #f8faff;
    border-radius: 12px;
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #007aff;
    }
    &.Mui-focused fieldset {
      border: 2px solid #007aff;
    }
  }
`;

const ErrorMessage = styled(Typography)`
  color: #ff4c4c;
  font-size: 14px;
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
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccountType] = useState("login");
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const validateFields = (fields) => {
    const errors = {};
    for (const key in fields) {
      if (!fields[key].trim()) {
        errors[key] = `${key} is required`;
      }
    }
    return errors;
  };

  const handleLogin = async () => {
    const errors = validateFields(login);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
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
      setFieldErrors({
        general: "Invalid username or password. Please try again.",
      });
    }
  };

  const handleSignup = async () => {
    const errors = validateFields(signup);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    let response = await API.userSignup(signup);
    setIsLoading(false);

    if (response.isSuccess) {
      setSignup({ name: "", username: "", password: "" });
      setAccountType("login");
    } else {
      setFieldErrors({ general: "Signup failed. Please try again later." });
    }
  };

  const toggleAccountType = () => {
    setAccountType(account === "login" ? "signup" : "login");
    setFieldErrors({});
  };

  return (
    <BackgroundContainer>
      <Container>
        <Logo
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZ_S0UGrzZLuw69vo2ZI8JBBoVRaCil3s8g&s"
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
              error={!!fieldErrors.username}
              helperText={fieldErrors.username}
              fullWidth
            />
            <StyledTextField
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              error={!!fieldErrors.password}
              helperText={fieldErrors.password}
              fullWidth
            />
            {fieldErrors.general && (
              <ErrorMessage>{fieldErrors.general}</ErrorMessage>
            )}
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
              error={!!fieldErrors.name}
              helperText={fieldErrors.name}
              fullWidth
            />
            <StyledTextField
              variant="outlined"
              label="Username"
              name="username"
              value={signup.username}
              onChange={(e) =>
                setSignup({ ...signup, username: e.target.value })
              }
              error={!!fieldErrors.username}
              helperText={fieldErrors.username}
              fullWidth
            />
            <StyledTextField
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={signup.password}
              onChange={(e) =>
                setSignup({ ...signup, password: e.target.value })
              }
              error={!!fieldErrors.password}
              helperText={fieldErrors.password}
              fullWidth
            />
            {fieldErrors.general && (
              <ErrorMessage>{fieldErrors.general}</ErrorMessage>
            )}
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
    </BackgroundContainer>
  );
};

export default Login;
