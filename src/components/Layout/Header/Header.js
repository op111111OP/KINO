import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar";
import { FcFilm } from "react-icons/fc";
import { PersonPlusFill, PersonVcardFill } from "react-bootstrap-icons";

// Layout

function Header() {
  return (
    <header>
      <div className="box_logo">
        <Link className="link link_logo" to="/">
          <FcFilm className="FcFilm" size={40} />
          KINO
        </Link>
        <SearchBar />
      </div>
      <div className="box_registration">
        <Link className="link link_registration" to="/posts">
          <div className="text_none_come">registration</div>
          <PersonPlusFill size={20} />
        </Link>
        <Link className="link link_come" to="/post">
          <div className="text_none_come">To come in</div>
          <PersonVcardFill size={20} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
