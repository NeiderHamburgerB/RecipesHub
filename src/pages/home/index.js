import React, { useContext } from 'react';
import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { CategoriesContext } from '../../contexts/categories';
import './Home.css';

function Home() {

  const { loading, filteredCategories, currentPage, itemsPerPage, categories, paginate } = useContext(CategoriesContext)

  return (
    <>
      {
        loading ? <p className="loading">Cargando...</p> : (
          <>
            <div className="home">
              <div className="home-title">Categories</div>
            </div>
            {
              filteredCategories.map((category) => (
                <Card
                  key={category.idCategory}
                  strCategory={category.strCategory}
                  strCategoryThumb={category.strCategoryThumb}
                  strCategoryDescription={category.strCategoryDescription}
                  type="category"
                  idMeal={category?.idMeal}
                />
              ))
            }
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={categories}
              paginate={paginate}
            />
          </>
        )
      }
    </>
  )
}

export { Home }