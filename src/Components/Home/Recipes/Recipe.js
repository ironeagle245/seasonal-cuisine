import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  return (
    <div className="wrap-recipe">
      <Link to={props.id2}>
        <img src={props.image2} alt={props.title2} className="image" />
        <div className="wrap-text-on-img">
          <h2 className="country-name">{props.country2}</h2>
          <p className="recipe-title">{props.title2}</p>
        </div>
      </Link>
    </div>
  );
}
