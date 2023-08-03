import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import '../index.css';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
      const recipes = await data.json();
      console.log("API response:", recipes);
      setSearchedRecipes(recipes.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      <TopBar />
      <div className="recipe-card-grid">
        {searchedRecipes && searchedRecipes.map((item) => (
          <div key={item.id} className="recipe-card">
            <Link to={"/recipe/" + item.id}>
              <h4 className="recipe-title">{item.title}</h4>
              <img src={item.image} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searched;
