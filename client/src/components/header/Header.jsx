import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: #264653; /* A more appealing color */
  font-family: "Montserrat", sans-serif; /* Updated font */
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 !important;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh; /* Slightly taller height for better spacing */
  z-index: 1000;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.8rem; /* Larger logo text */
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #e9c46a;
  }
`;

const LinksContainer = styled("div")`
  display: flex;
  gap: 2rem;
  align-items: center;

  & > a,
  & > span {
    color: white;
    text-decoration: none;
    font-size: 1.2rem; /* Readable size */
    font-weight: 500;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically */
    gap: 1rem; /* Add spacing between links */
    width: 100%; /* Full-width in mobile view */
    position: absolute; /* Absolute positioning for dropdown */
    top: 12vh; /* Below the navbar */
    left: 0;
    background: #264653; /* Match navbar background */
    padding: 1rem 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-200%);
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateY(0);
    }
  }
`;

const Hamburger = styled("div")`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  & > span {
    width: 25px;
    height: 3px;
    background: white;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logout = () => {
    sessionStorage.clear();
    navigate("/account");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Component>
      <Container>
        {/* Logo */}
        <Logo to="/">LOGO</Logo>

        {/* Hamburger Icon */}
        <Hamburger onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        {/* Links */}
        <LinksContainer className={menuOpen ? "open" : ""}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <span onClick={logout}>LOGOUT</span>
        </LinksContainer>
      </Container>
    </Component>
  );
};

export default Header;
