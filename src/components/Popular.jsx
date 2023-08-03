// Popular.jsx
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../index.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`
        );
        const data = await api.json();

        if (data && data.recipes) {
          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setPopular(data.recipes);
        } else {
          console.error("Error fetching popular recipes:", data);
        }
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
      }
    }
  };

  return (
    <div>
      <h3>Popular Recipes</h3>
      <div className="home-container">
        {popular.length > 0 ? (
          popular.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <div className="recipe-image-container">
                <Link to={"/recipe/" + recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
                <h4 className="recipe-title">{recipe.title}</h4>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Popular;

