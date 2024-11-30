import React, { useState, useEffect, useContext } from "react";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 100%;
  max-width: 420px;
  margin: 50px auto;
  background: linear-gradient(145deg, #ffffff, #f1f3f6);
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;

const Image = styled("img")({
  width: 120,
  display: "block",
  margin: "30px auto 20px",
  borderRadius: "50%",
  border: "5px solid #2874f0",
  padding: "10px",
});

const Wrapper = styled(Box)`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: linear-gradient(90deg, #2874f0, #0056b3);
  color: white;
  height: 48px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  box-shadow: 0px 5px 15px rgba(40, 116, 240, 0.4);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #0056b3, #2874f0);
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #ffffff;
  color: #2874f0;
  height: 48px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0px 5px 15px rgba(40, 116, 240, 0.2);
  }
`;

const TextFieldStyled = styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    background-color: #f7f9fc;
    border-radius: 12px;
    padding: 8px 12px;
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #2874f0;
    }
    &.Mui-focused fieldset {
      border: 2px solid #2874f0;
    }
  }
  .MuiInputLabel-root {
    color: #6c757d;
  }
`;

const Text = styled(Typography)`
  color: #6c757d;
  font-size: 14px;
  text-align: center;
`;

const Error = styled(Typography)`
  font-size: 12px;
  color: #ff4c4c;
  font-weight: 600;
  margin-top: -10px;
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
