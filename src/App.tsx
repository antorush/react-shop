/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Header from "./utility/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import { dataHeader } from "./data/data";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/Sign Up/SignUp";
import Footer from "./utility/Footer/Footer";
import { FooterData } from "./data/data";

function App() {
  return (
    <Router>
      <Header NavBarItems={dataHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign up" element={<SignUp />} />
      </Routes>
      <Footer footerContent={FooterData} />
    </Router>
  );
}

export default App;
