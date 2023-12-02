import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipesContext } from '../../../contexts/recipes';
import './Details.css';

function Details() {

    const navigate = useNavigate();
    const { id } = useParams();

    const { loading, setLoading } = useContext(RecipesContext);
    const [recipesDetail, setRecipesDetail] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                setRecipesDetail(data.meals[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        if (recipesDetail[ingredientKey] && recipesDetail[measureKey]) {
          ingredients.push(
            <li key={i}>
              {recipesDetail[measureKey]} {recipesDetail[ingredientKey]}
            </li>
          );
        } else {
          break;
        }
      }

    return (
        <>
            {loading ? (
                <p className="loading">Cargando...</p>
            ) : (
                <>
                    <div className="card-details">
                        <span className="card-details-span" onClick={goBack}>&#10094;</span>
                        <div className="card-details-title">{recipesDetail.strMeal}</div>
                    </div>
                    <div className="recipe-card">
                        <img src={recipesDetail.strMealThumb} alt={recipesDetail.strMeal} className="recipe-image" />
                        <h2 className="recipe-title">{recipesDetail.strMeal}</h2>
                        <p className="recipe-category">Category: {recipesDetail.strCategory}</p>
                        <p className="recipe-instructions">{recipesDetail.strInstructions}</p>
                        <ul className="recipe-ingredients">
                            <h3>Ingredients:</h3>
                            {ingredients}
                        </ul>
                        <a href={recipesDetail.strSource} target="_blank" rel="noopener noreferrer" className="recipe-source">Source</a>
                    </div>

                </>
            )}
        </>

    );
}

export { Details }
