import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js';

function App() {
    return ( 
      <div id="container">
        {/* Header */}
        <Header></Header>
        {/* Content */}
        <Content></Content>
        {/* Footer */}
        <Footer></Footer>
		</div>
    )
}

export default App;

