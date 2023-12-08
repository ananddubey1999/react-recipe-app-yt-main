import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import './App.css';
import RecipeId from './RecipeIDPage/RecipeId';
import Category from './Category/Category';
import SearchElement from './SearchElement/SearchElement';
import generateSitemap from './sitemapGenerator'; // Import sitemap generator

const App = () => {
  const routes = [
    <Route key="home" path="/" element={<Home />} />,
    <Route key="recipe" path="/:idMeal" element={<RecipeId />} />,
    <Route key="category" path="/category/:name" element={<Category />} />,
    <Route key="search" path="/search/:searchTerm" element={<SearchElement />} />,
    // Add more routes here as needed
  ];

  useEffect(() => {
    generateSitemap(routes);
  }, [routes]);

  return (
    <>
      <Router>
        <Routes>{routes}</Routes>
      </Router>
    </>
  );
};

export default App;

/*
In React Router, when a path segment begins with a colon (:) within a Route component,
it signifies a dynamic segment of the URL. It's a placeholder for a URL parameter that can vary and be captured 
as a value to be used in the rendering of components.
because here it change dynamically whenever we click on it. 
*/ 