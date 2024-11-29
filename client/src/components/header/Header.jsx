import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0; /* Ensure no margin is applied */
`;

const Container = styled(Toolbar)`
  justify-content: center;
  gap: 40px;
  font-size: 18px;
  font-weight: bold;

  & > a {
    padding: 10px 15px;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => {
    sessionStorage.clear();
    navigate("/account");
  };

  return (
    <Component position="static">
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link
          to="/account"
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          LOGOUT
        </Link>
      </Container>
    </Component>
  );
};

export default Header;
