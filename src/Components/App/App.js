import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div>
        {/* Page Preloder */}
          <div id="preloder">
              <div className="loader" />
          </div>
        {/* Header Section Begin */}
          <Header></Header>
        {/* Header End */}
        {/* Content */}
          <Content></Content>
          {/* Content End */}
        {/* Footer Section Begin */}
          <Footer></Footer>
        {/* Footer Section End */}
        {/* Js Plugins */}
      </div>
  );
}

export default App;
