import React, { useState, useEffect, useContext } from "react";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 400px;
  margin: 100px auto;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background: #f9f9f9;
`;

const Image = styled("img")({
  width: 80,
  display: "flex",
  margin: "30px auto 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #fff;

  & > div {
    width: 100%;
  }

  & > button {
    width: 100%;
    padding: 10px;
  }

  & > p {
    margin-top: 20px;
    color: #666;
    font-size: 14px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: linear-gradient(90deg, #ff7a18, #ff2e63);
  color: #fff;
  border-radius: 25px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 15px rgba(255, 46, 99, 0.3);
    background: linear-gradient(90deg, #ff2e63, #ff7a18);
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  color: #ff2e63;
  background: #f9f9f9;
  border: 1px solid #ff2e63;
  border-radius: 25px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 15px rgba(255, 46, 99, 0.2);
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #666;
`;

const Error = styled(Typography)`
  font-size: 14px;
  color: #ff4d4d;
  font-weight: 600;
  text-align: center;
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
  };

  // Signup User
  const signupUser = async () => {
    if (!signup.name || !signup.username || !signup.password) {
      showError("All fields are required!");
      return;
    }
    const response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      showError("Signup failed! Please try again.");
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
