import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { RecipesContext } from '../../contexts/recipes';
import { Pagination } from '../../components/Pagination';
import './Recipes.css';

function Recipes() {

  const navigate = useNavigate();
  const { name } = useParams();

  const { setRecipesData, loading, setLoading, filteredRecipes, currentPage, itemsPerPage, recipes, paginate, setCurrentPage } = useContext(RecipesContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/json/v1/1/filter.php?c=${name}`);
        const data = await response.json();
        setRecipesData(data.meals);
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
    setCurrentPage(1);
  };

  return (
    <>
      {
        loading ? <p className="loading">Cargando...</p> : (
          <>
            <div className="recipes">
              <span className="recipes-span" onClick={goBack}>&#10094;</span>
              <div className="recipes-title">{name} Recipes</div>
            </div>
            {
              filteredRecipes.map((recipes) => (
                <Card
                  key={recipes.idMeal}
                  strCategory={recipes.strMeal}
                  strCategoryThumb={recipes.strMealThumb}
                  strCategoryDescription={name}
                  type="recipe"
                  idMeal={recipes?.idMeal}
                />
              ))
            }
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={recipes}
              paginate={paginate}
            />
          </>
        )
      }
    </>
  )
}

export { Recipes }
