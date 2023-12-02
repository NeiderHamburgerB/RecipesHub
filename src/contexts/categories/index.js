import React, { useState, useEffect, createContext } from 'react';

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const contextValue = {
    categories,
    loading,
    searchTerm,
    setSearchTerm,
    currentPage,
    itemsPerPage,
    paginate,
    filteredCategories: categories
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .filter((category) =>
        category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
      ),
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, CategoriesContext }