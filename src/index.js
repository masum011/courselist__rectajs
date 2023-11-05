import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { store } from './store/store';
import { Provider } from 'react-redux';
import HomeDetalis from './Pages/Home/HomeDetalis';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/detalis",
    element: <HomeDetalis/>,
    // errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
