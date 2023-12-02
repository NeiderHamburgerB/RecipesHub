import { Link } from 'react-router-dom';
import React from 'react';
import './Card.css';

function Card({ strCategory, strCategoryThumb, strCategoryDescription, type, idMeal }) {
    return (
        <div className="card">
            <img className="category-thumb" src={strCategoryThumb}
                alt="Category Thumbnail" />
            <div className="category-details">
                <h2 className="category-title">{strCategory}</h2>
                <p className="category-description">{strCategoryDescription.length > 40 ? strCategoryDescription.slice(0, 40) + '...' : strCategoryDescription}</p>
                <Link to={type === 'category' ? `/category/${strCategory}`: `/category/${strCategory}/${idMeal}` } className=" view-link">
                    <button className="view-more-btn">
                        See Recipes
                    </button>
                </Link>
            </div>
        </div>
    )
}

export { Card }
