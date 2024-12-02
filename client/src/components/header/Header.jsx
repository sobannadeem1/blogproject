import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: e9c46a;
  fontfamily: Poppins;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 !important;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh; /* Increased height */
  z-index: 1000;
`;

const Container = styled(Toolbar)`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /* Center items vertically */
`;

const LinksContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-evenly; /* Distribute space evenly between links */
  & > a,
  & > span {
    padding: 1vw; /* Adjust padding using viewport width */
    color: white; /* White text for better visibility */
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row; /* Stack links vertically on smaller screens */
    font-size: 0.8rem
  padding: 3vw
  font-family: "Dancing Script", cursive;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/account");
  };

  return (
    <Component position="static">
      <Container>
        {/* Links for larger screens */}
        <LinksContainer>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <span style={{ cursor: "pointer" }} onClick={logout}>
            LOGOUT
          </span>
        </LinksContainer>
      </Container>
    </Component>
  );
};

export default Header;
