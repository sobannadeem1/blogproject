import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// Styled Components
const Component = styled(AppBar)`
  background: #264653; /* Navbar background color */
  font-family: "Montserrat", sans-serif; /* Font style */
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh; /* Height of the navbar */
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
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
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
    font-size: 1.2rem;
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
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    position: absolute;
    top: 12vh;
    left: 0;
    background: #264653;
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

// Header Component
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
        <Logo to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZ_S0UGrzZLuw69vo2ZI8JBBoVRaCil3s8g&s"
            alt="Logo"
          />
        </Logo>

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
