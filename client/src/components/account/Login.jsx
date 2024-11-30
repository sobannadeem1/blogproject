import React, { useState, useEffect, useContext } from "react";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 400px;
  margin: 100px auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: linear-gradient(135deg, #ffffff, #f5f7fa);
  overflow: hidden;
  transform: translateY(0);
  animation: slideIn 0.5s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "40px auto 0",
  animation: "fadeIn 0.8s ease",

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "scale(0.8)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
});

const Wrapper = styled(Box)`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;

  & > div {
    width: 100%;
  }

  & > button {
    width: 100%;
    padding: 12px;
  }

  & > p {
    margin-top: 20px;
    color: #888;
    font-size: 14px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: linear-gradient(90deg, #ff7a18, #ff2e63);
  color: #fff;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(255, 46, 99, 0.4);
    background: linear-gradient(90deg, #ff2e63, #ff7a18);
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  color: #ff2e63;
  background: #fff;
  border: 1px solid #ff2e63;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(255, 46, 99, 0.2);
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #888;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Error = styled(Typography)`
  font-size: 14px;
  color: #ff4d4d;
  font-weight: 600;
  text-align: center;
  animation: shake 0.3s ease;

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState("");
  const [account, toggleAccount] = useState("login");

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  // Check for existing token on mount
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      isUserAuthenticated(true);
      navigate("/"); // Redirect if token exists
    }
  }, [isUserAuthenticated, navigate]);

  // Handle input changes for login
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // Handle input changes for signup
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  // Login User
  const loginUser = async () => {
    if (!login.username || !login.password) {
      showError("Both username and password are required!");
      return;
    }
    try {
      const response = await API.userLogin(login);
      if (response.isSuccess) {
        showError("");
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
        showError("Invalid username or password!");
      }
    } catch (error) {
      showError("An error occurred during login!");
      console.error(error);
    }
  };

  // Signup User
  const signupUser = async () => {
    if (!signup.name || !signup.username || !signup.password) {
      showError("All fields are required!");
      return;
    }
    try {
      const response = await API.userSignup(signup);
      if (response.isSuccess) {
        showError("");
        setSignup(signupInitialValues);
        toggleAccount("login");
      } else {
        showError("Signup failed! Please try again.");
      }
    } catch (error) {
      showError("An error occurred during signup!");
      console.error(error);
    }
  };

  // Toggle between login and signup forms
  const toggleSignup = () => {
    toggleAccount(account === "signup" ? "login" : "signup");
    showError(""); // Clear error when toggling
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={onValueChange}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={onValueChange}
              name="password"
              type="password"
              label="Enter Password"
            />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained" onClick={loginUser}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={toggleSignup}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={onInputChange}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={onInputChange}
              name="password"
              type="password"
              label="Enter Password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={signupUser}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={toggleSignup}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
