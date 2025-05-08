import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <h2 className='text-center my-4'>Welcome to React Router Tutorial</h2>
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-center'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink 
                to='/' 
                className='nav-link' 
                activeClassName="active text-primary border-bottom border-primary"
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink 
                to='/contact' 
                className='nav-link' 
                activeClassName="active text-success border-bottom border-success"
              >
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink 
                to='/about' 
                className='nav-link' 
                activeClassName="active text-info border-bottom border-info"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes> */}
        <Routes>
          {showContentMenu(routes)}
        </Routes>
      </div>
    </Router>
  );
}
// const showContentMenu = (routes) => {
//   return routes.map((route, index) => (
//       <Route 
//         key={index}
//         path={route.path}
//         element={route.element} 
//       />
//     )
//   );
// };
const showContentMenu = (routes) => {
  var result = null;
  if(routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route 
          key={index}
          path={route.path}
          element={route.element}/>
      );
    });
  }
  return result;
}
export default App;
