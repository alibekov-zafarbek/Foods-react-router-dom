import React from 'react'
import { Link } from 'react-router-dom'

export default function MealItem(props) {
  const {idMeal, strMeal, strMealThumb} = props
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title text-black">
          <b>{strMeal}</b>
        </span>
        {/* <p>{strCategoryDescription.slice(0, 100)}...</p> */}
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch Reciept
        </Link>
      </div>
    </div>
  )
}
