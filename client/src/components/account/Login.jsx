import React, { useState, useEffect, useContext } from "react";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "30px 0 10px",
});

const Wrapper = styled(Box)`
  padding: 35px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #2874f0;
  color: #fff;
  height: 48px;
  border-radius: 30px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d5cbf;
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 30px;
  width: 100%;
  font-weight: bold;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
  text-align: center;
`;

const Error = styled(Typography)`
  font-size: 12px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
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
  const [redirect, setRedirect] = useState(false); // State to manage redirection

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  useEffect(() => {
    if (redirect) {
      navigate("/"); // Navigate only after authentication is successful
    }
  }, [redirect, navigate]); // Ensure navigate happens once

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
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
      setLogin(loginInitialValues);

      // Set redirect to true to trigger useEffect for navigation
      setRedirect(true);
    } else {
      showError("Something went wrong! Please try again later");
    }
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      showError("Something went wrong! Please try again later");
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="outlined"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#fff",
                borderRadius: 3,
              }}
            />
            <TextField
              variant="outlined"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
              type="password"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#fff",
                borderRadius: 3,
              }}
            />
            {error && <Error>{error}</Error>}
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Text>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="outlined"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#fff",
                borderRadius: 3,
              }}
            />
            <TextField
              variant="outlined"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#fff",
                borderRadius: 3,
              }}
            />
            <TextField
              variant="outlined"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
              type="password"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#fff",
                borderRadius: 3,
              }}
            />
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text>OR</Text>
            <LoginButton onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
