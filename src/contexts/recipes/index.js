import React, { useState, createContext } from 'react';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const contextValue = {
    recipes: recipesData,
    loading,
    searchTerm,
    setSearchTerm,
    currentPage,
    itemsPerPage,
    paginate,
    setLoading,
    setRecipesData,
    setCurrentPage,
    filteredRecipes: recipesData
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
  };

  return (
    <RecipesContext.Provider value={contextValue}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesProvider, RecipesContext };