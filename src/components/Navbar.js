import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">
          <img
            src="https://cdn.vox-cdn.com/thumbor/s2_cd1uqU2wT_uy6vx4-GRESV8k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19996673/Studio_Ghibli_Logo.jpg"
            style={{ width: "50px", height: "50px" }}
            alt="Ghibli-movie-img"
          />
        </Link>{" "}
        <Link to="/movies">Movies</Link> <Link to="/people">People</Link>{" "}
        <Link to="/locations">Locations</Link>
      </nav>
    </div>
  );
}

export default Navbar;
