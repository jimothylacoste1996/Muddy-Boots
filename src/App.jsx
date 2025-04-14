import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
