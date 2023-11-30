import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
// import { Container } from "react-bootstrap";
import Navbar from "./component/Navbar/Navbar";
import { ShoppingCartProvider } from "./component/context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar>Store</Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
