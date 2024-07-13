import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Explore Meerut
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/tourist-attractions">
                    Tourist Attractions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/local-news">
                    Local News
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services-directory">
                    Services Directory
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/business-directory">
                    Business Directory
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/transportation">
                    Transportation
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/accommodation">
                    Accommodation
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/food-and-dining">
                    Food & Dining
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/education">
                    Education
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-flex ms-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
