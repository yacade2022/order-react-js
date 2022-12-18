import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Article from './Article';
function App() {
  return (
   <BrowserRouter basename='/order-react-js'>
     <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='home/:id' element={<Article />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />  
        
        
        
        </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App;
