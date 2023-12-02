import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Blog } from './pages/blog';
import { Home } from './pages/home';
import { Recipes } from './pages/recipes';
import { Details } from './pages/recipes/details';
import { Contact } from './pages/contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CategoriesProvider } from './contexts/categories';
import { RecipesProvider } from './contexts/recipes';

function MainContent() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Recipes />} />
            <Route path="/category/:name/:id" element={<Details />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <p className="info">
            Every day, the Deliciashub team updates and adds more recipes. It's all here, with totally free recipes. We have a great selection of free recipes that you can view online. Deliciashub is the most complete and revolutionary Spanish cuisine recipe site. We are always working to add more elements that will keep your love for cooking very alive.
          </p>
        </div>
        <Footer />
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default MainContent;