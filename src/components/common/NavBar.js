import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ open, setOpen }) => {
  return (
    <div className="nav__div">
      <div className="nav">
        <Link to={"/"}>
          <img
            src="https://icon-library.com/images/movie-app-icon/movie-app-icon-27.jpg"
            width="70"
            height="70"
            alt=""
            className="logo"
          />
        </Link>
        <ul className="navlinks">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
        </ul>
        <a
          href="#"
          id="menu"
          onClick={() => setOpen(!open)}
          style={{ display: "none" }}
        >
          <img src="menu.svg" />
        </a>
      </div>
    </div>
  );
};
