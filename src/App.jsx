import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "@fontsource/inter";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import drawingBg from "./assets/bg1.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          position: "relative", // Allow overlay to sit on top
          backgroundImage: `url(${drawingBg})`, // Background image
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Dark semi-transparent overlay
            opacity: 0.1,
            zIndex: -1, // Ensure the overlay is behind the content
          }}
        ></div>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Routes>

        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
