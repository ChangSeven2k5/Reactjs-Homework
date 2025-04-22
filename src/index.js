import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
// import One from './Example.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
   <App />
 </React.StrictMode>
  // <div className='App'>
  //   <div className='container'>
  //     <div className='row'>
  //     <One title="áo thun 1" price="200k" image="https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1456D.jpg"></One>
  //     <One title="áo thun 2" price="250k" image="https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1456D.jpg"></One>
  //     <One title="áo thun 3" price="400k" image="https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1456D.jpg"></One>
  //     <One title="áo thun 4" price="300k" image="https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1456D.jpg"></One>
  //     <One title="áo thun 5" price="450k" image="https://thoitrangbigsize.vn/wp-content/uploads/2024/12/BSX1456D.jpg"></One>
  //     </div>
  //   </div>
  //   <div>
  //     <One width="200px" height="200px" backgroundColor="yellow"></One>
  //   </div>
  // </div>
);

reportWebVitals();
