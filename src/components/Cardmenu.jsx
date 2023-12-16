import React from "react";
import post from "../post.json";
import { Link } from "react-router-dom";
import "./cardrecomendation.css";

export default function RecomendationMenu({ menuItems }) {
  return (
    <>
      <div className="recomendation-list">
        {menuItems.map((menu, index) => (
          <div key={index}>
            <img src={menu.pictureMenu} alt={menu.Title} />
            <Link to={`/productdetail/${menu.id}`}>
              <h4 className="Link">{menu.Title}</h4>
            </Link>
            <p className="description-text">{menu.Description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
