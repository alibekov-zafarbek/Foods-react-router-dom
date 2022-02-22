/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "./Loader";

export default function Reciept() {
  const [reciept, setReciept] = useState([]);
  const [showReciept, setShowReciept] = useState(false)
  let { id } = useParams();
  let navigate = useNavigate();
  //strInstructions, strArea,strCategory, strMeal,strMealThumb,strYoutube,strSource
  useEffect(() => {
    getMealById(id).then((data) => setReciept(data.meals[0]));
    
  }, [id]);

  console.log(reciept);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!reciept.idMeal ? (
        <Loader />
      ) : (
        <div className="reciept">
          <img src={reciept.strMealThumb} alt={reciept.strMeal} />
          <h1>{reciept.strMeal && reciept.strMeal}</h1>
          <h6>
            <b>Category:</b> {reciept.strCategory && reciept.strCategory}
          </h6>
          <h6>
            <b>Area:</b> {reciept.strArea && reciept.strArea}
          </h6>
          <p>{reciept.strInstructions && reciept.strInstructions}</p>
          {reciept.strYoutube && (
            <div>
              <h5>Video Reciept</h5>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${reciept.strYoutube.slice(
                  -11
                )}`}
                title={reciept.strMeal && reciept.strMeal}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <button onClick={() => setShowReciept(prev => !prev) } className="btn">Show Reciept</button>
          {showReciept ?
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(reciept).map((key, index) => {
                if (key.includes("Ingredient") && reciept[key]) {
                  return (
                    <tr key={index} >
                      <td>{reciept[key]}</td>
                      <td>{reciept[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table> : null
          }
        </div>
      )}
    </>
  );
}
