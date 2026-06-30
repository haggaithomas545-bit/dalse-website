import React from "react";
import "./Navbar.css";
import { ChevronDown, MapPin, Phone, Clock } from "lucide-react";
import LogoDark from "../assets/img/logo-dark.png";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <>
      <div className="container">
        <div className="topbar">
          <div className="topbarclose">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <MapPin size={14} color="#e8a020" fill="#e8a020" />
              1010 avenue New York, NY 10018 US.
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Phone size={14} color="#e8a020" fill="#e8a020" /> 212 386 5575,
              212 386 5576
            </span>
          </div>
          <div className="topbarclose">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Clock size={14} color="#1a2340" fil="#e8a020" />
              Mon-sat, 8.00-18.00. Sunday CLOSED
            </span>
            <span>monday-Friday</span>
          </div>
        </div>
      </div>

      {/* main Nav */}
      <div>
        <nav className="navbar">
          <Link to="/">
            <img src={LogoDark} alt="logo" />
          </Link>
          {/* Nav list */}
          <ul className="nav-links">
            <li
              onMouseEnter={() => setOpenMenu("Home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Home
                <ChevronDown size={14} />
              </span>
              {openMenu == "Home" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/">Home 1</Link>
                  </li>
                  <li>
                    <Link to="/hometwo">Home 2</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("Page")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                page
                <ChevronDown size={14} />
              </span>
              {openMenu == "Page" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/alumini">Alumini</Link>
                  </li>
                  <li>
                    <Link to="/blank">Blank Page</Link>
                  </li>
                  <li>
                    <Link to="404">404</Link>
                  </li>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="registration">Registration</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("News")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                news
                <ChevronDown size={14} />
              </span>
              {openMenu == "News" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/newsone">Newsone</Link>
                  </li>
                  <li>
                    <Link to="/newstwo">Newstwo</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("Elements")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                elements
                <ChevronDown size={14} />
              </span>
              {openMenu == "Elements" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/typography">Typography</Link>
                  </li>
                  <li>
                    <Link to="reactbutton">ReactButton</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span>
                {" "}
                <Link to="/contact">contact</Link>
              </span>
            </li>
            <li
              onMouseEnter={() => setOpenMenu("Docs")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Docs
                <ChevronDown size={14} />
              </span>
              {openMenu == "Docs" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/docs/getting-started">Getting started</Link>
                  </li>
                  <li>
                    <Link to="/docs/reactcomponents">Components</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <Link to="/purchase" className="purchase-btn">
            Purchase
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
