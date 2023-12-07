import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import RecipeId from './components/RecipeId'
import Category from './components/Category'
import SearchElement from './components/SearchElement'

const App = () => {
  return (
  <>
  <Router>  
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/:idMeal' element={ <RecipeId />} />
      <Route path='/category/:name' element={ <Category />} />
      <Route path='/search/:searchTerm' element={ <SearchElement />} />
    </Routes>
  </Router>
 
  </>
  )
}

export default App

// Part 2

// Note - when we applied the css on App.js(App.css) the it will work same for all the componant of react