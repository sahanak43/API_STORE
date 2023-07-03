import React from "react";
import Products from "./router/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Category from "./router/Category";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
    
        {/* <Route path="/val/:category" element={<Category />} /> */}
        {/* <Route path="category/:title/:id" element={<Products />} /> */}
        <Route path="/:id/:title" element={<Products />} />

      </Routes>

     
    </>
  );
};

export default App;
