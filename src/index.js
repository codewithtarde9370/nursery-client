import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import PlantView from './views/PlantView/Plant';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Plant",
    element: <PlantView/>
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>
  }
])

root.render(<RouterProvider router={router}/>);
