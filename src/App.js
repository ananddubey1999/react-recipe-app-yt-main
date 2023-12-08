import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import './App.css';
import RecipeId from './RecipeIDPage/RecipeId';
import Category from './Category/Category';
import SearchElement from './SearchElement/SearchElement';
import generateSitemap from './sitemapGenerator'; // Import sitemap generator

const App = () => {
  // Generate sitemap
  const urls = generateSitemap();

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:idMeal' element={<RecipeId />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/search/:searchTerm' element={<SearchElement />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
