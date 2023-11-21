import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" style={{ color: "purple" }}>
        Accueil
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Calculatrice" className="nav-link" style={{ color: "purple" }}>
              Calculatrice
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Slider" className="nav-link" style={{ color: "purple" }}>
              Slider
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/To-Do-List" className="nav-link" style={{ color: "purple" }}>
              To-Do-List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Pagination" className="nav-link" style={{ color: "purple" }}>
              Pagination
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
