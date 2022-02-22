import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title text-black">
          <b>{strCategory}</b>
        </span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <div className="card-action">
        <Link to={`category/${strCategory}`} className="btn">
          Watch Category
        </Link>
      </div>
    </div>
  );
}
