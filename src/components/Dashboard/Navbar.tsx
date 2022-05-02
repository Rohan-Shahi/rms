import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isClose, setIsClose] = useState(false);

  return (
    <>
      <nav className={`sidebar ${isClose ? "close" : null}`}>
        <header>
          <div className="image-text">
            <span className="image"></span>

            <div className="text logo-text">
              <span className="name">WICC</span>
              <span className="profession">Web developer</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={() => {
              setIsClose(!isClose);
            }}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/">
                  <i className="bx bx-cloud-lightning icon"></i>
                  <span className="text nav-text">Weather</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/">
                  <i className="bx bx-notepad icon"></i>
                  <span className="text nav-text">Manage NOTES</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/">
                  <i className="bx bx-cog icon"></i>
                  <span className="text nav-text">Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun  icon sun"></i>
              </div>
              <span className="mode-text text"></span>

              <div className={`toggle-switch `}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
