import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link to="/home" >
        <h1>
          <span>Your Adventure</span>
        </h1>
      </Link>
    </header>
  );
}
