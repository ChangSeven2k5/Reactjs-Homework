import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "../Form_State/Add";  
import Products from "../Form_State/Products";  
import ProductOrder from "../Menu/ProductOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<Add />} />

        <Route path="/menu" element={<ProductOrder />} />
      </Routes>
    </Router>
  );
}

export default App;