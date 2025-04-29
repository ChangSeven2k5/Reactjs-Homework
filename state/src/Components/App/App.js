import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes is used instead of Switch
import Add from '../Form_State/Add';
import ProductList from '../Form_State/ProductList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes> {/* Switch is replaced by Routes */}
            <Route path="/add" element={<Add />} /> {/* Route component now uses element prop */}
            <Route path="/products" element={<ProductList />} /> {/* Route component now uses element prop */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
