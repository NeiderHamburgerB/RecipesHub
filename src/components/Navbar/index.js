import React, { useContext } from 'react';
import { routes } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories';
import { RecipesContext } from '../../contexts/recipes';
import './Navbar.css';
import { useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation();
    const categoriesContext = useContext(CategoriesContext);
    const recipesContext = useContext(RecipesContext);

    const getContext = () => {
        if (location.pathname.includes('/category/')) {
        return recipesContext;
        } else {
        return categoriesContext;
        }
    };

    const context = getContext();

    const {
        setSearchTerm,
        searchTerm,
      } = context;

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <nav className="navigation">
            <h1 className="title">Recipes<span className="hub">hub</span></h1>
            
            <div className="menu-options">
                <ul>
                    {routes.map(route => (
                        <li
                            key={route.id}
                        >
                            <Link
                                className="nav-link"
                                to={route.to}
                            >
                                {route.text}
                            </Link>
                        </li>
                    ))}
                 
                </ul>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search..." onChange={handleInputChange} value={searchTerm}/>
                <button >Search</button>
            </div>
        </nav>
    )
}

export { Navbar }
