import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
