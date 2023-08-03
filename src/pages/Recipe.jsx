import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import '../index.css';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const detailData = await data.json();
      setDetails(detailData);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      <TopBar />
      <div className="recipe-container">
        <div className="recipe-image">
          <h2 className="recipe-title">{details.title}</h2>
          <img src={details.image} alt="" />
        </div>
        <div className="recipe-details">
          <button
            className={activeTab === 'instructions' ? 'instruction-button active' : 'instruction-button'}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === 'ingredients' ? 'ingredients-button active' : 'ingredients-button'}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients && details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
