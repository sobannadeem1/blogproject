import { Box } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// Components
import DataProvider from "./context/DataProvider";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePost from "./components/create/CreatePost";
import DetailView from "./components/details/DetailView";
import Update from "./components/create/Update";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from "./components/account/Login";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// PrivateRoute component to handle authentication
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated && token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/account" />
  );
};

function App() {
  const [isAuthenticated, setIsUserAuthenticated] = useState(false);

  // Initialize AOS (Animate on Scroll) for animations
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-out", // Animation easing
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            {/* Public Route for Login */}
            <Route
              path="/account"
              element={
                <Login setIsUserAuthenticated={setIsUserAuthenticated} />
              }
            />

            {/* Private Routes for authenticated users */}
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home data-aos="fade-up" />} />
              <Route
                path="/create"
                element={<CreatePost data-aos="fade-up" />}
              />
              <Route
                path="/details/:id"
                element={<DetailView data-aos="fade-up" />}
              />
              <Route
                path="/update/:id"
                element={<Update data-aos="fade-up" />}
              />
              <Route path="/about" element={<About data-aos="fade-up" />} />
              <Route path="/contact" element={<Contact data-aos="fade-up" />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
