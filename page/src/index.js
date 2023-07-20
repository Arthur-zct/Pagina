import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//rotas
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Teste from './pages/teste'
import Error from './routes/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: 'teste',
        element: <Teste/>
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
