import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/images/logo2.png";

export default function Header() {
  const history = useHistory();

  const isActive = (h, p) => {
    if (h.location.pathname === p) return "active";
  };

  return (
    <div>
      <header role="banner">
        <img id="logo-main" src={Logo} width="200" alt="Logo Thing main logo" />
        <nav
          id="navbar-primary"
          className="navbar navbar-default"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-primary-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbar-primary-collapse"
            >
              <ul className="nav navbar-nav">
                <li className={isActive(history, "/")}>
                  <Link to="/">Home</Link>
                </li>
                <li className={isActive(history, "/singlejokes")}>
                  <Link to="/singlejokes">Single Jokes</Link>
                </li>
                <li className={isActive(history, "/twopart-jokes")}>
                  <Link to="/twopart-jokes">Two-Part Jokes</Link>
                </li>
                <li className={isActive(history, "/favourites")}>
                  <Link to="/favourites">Favourites</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
