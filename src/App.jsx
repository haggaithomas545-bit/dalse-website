import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Hometwo from "./pages/Hometwo";
import About from "./pages/About";
import Alumini from "./pages/Alumini";
import Newsone from "./pages/Newsone";
import Newstwo from "./pages/Newstwo";
import Typography from "./pages/Typography";
import ReactButton from "./pages/ReactButton";
import Doc from "./pages/Doc";
import ReactComponent from "./pages/ReactComponent";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hometwo" element={<Hometwo />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumini" element={<Alumini />} />

          <Route path="/services" element={<Services />} />
          <Route path="/newsone" element={<Newsone />} />
          <Route path="/newstwo" element={<Newstwo />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/reactbutton" element={<ReactButton />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/docs/reactcomponents" element={<ReactComponent />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
