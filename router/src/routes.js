import React from "react";
import Home from './components/Home';
import Contact from "./components/Contact";
import About from "./components/About";

const routes = [
    {
        path: "/",
        exact: true,
        element: <Home/>
    },
    {
        path: "/contact",
        exact: true,
        element: <Contact/>
    },
    {
        path: "/about",
        exact: true,
        element: <About/>
    }
]

export default routes;