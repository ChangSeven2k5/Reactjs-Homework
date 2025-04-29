import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "../Form_State/Add";  
import Products from "../Form_State/Products";  
import ProductOrder from '../Menu/ProductOrder';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* Dùng Routes thay cho Switch, element thay cho component ( ở version 6) */}
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
      // <ProductOrder></ProductOrder>
    );
  }
}

export default App;

