import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Component = styled(AppBar)`
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 !important; /* Override any inherited margin */
  padding: 0;
  position: fixed; /* Stick the navbar to the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it appears above other content */
`;

const Container = styled(Toolbar)`
  justify-content: space-between;
`;

const LinksContainer = styled("div")`
  display: flex;
  & > a,
  & > span {
    padding: 20px;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    display: none; /* Hide links on smaller screens */
  }
`;

const Hamburger = styled(IconButton)`
  display: none;

  @media (max-width: 600px) {
    display: block; /* Show hamburger menu on smaller screens */
  }
`;

const MobileDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 250px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    navigate("/account");
  };

  const toggleDrawer = (state) => {
    setDrawerOpen(state);
  };

  return (
    <Component position="static">
      <Container>
        {/* Hamburger Menu */}
        <Hamburger onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </Hamburger>

        {/* Links for larger screens */}
        <LinksContainer>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <span style={{ cursor: "pointer" }} onClick={logout}>
            LOGOUT
          </span>
        </LinksContainer>

        {/* Mobile Drawer */}
        <MobileDrawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => navigate("/")}>
              HOME
            </ListItem>
            <ListItem button onClick={() => navigate("/about")}>
              ABOUT
            </ListItem>
            <ListItem button onClick={() => navigate("/contact")}>
              CONTACT
            </ListItem>
            <ListItem button onClick={logout}>
              LOGOUT
            </ListItem>
          </List>
        </MobileDrawer>
      </Container>
    </Component>
  );
};

export default Header;
