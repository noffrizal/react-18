import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './Pages/404'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import ProductsPage from './Pages/products'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />
  },
  {
    path:'/login',
    element: <LoginPage />,
  },
  {
    path:'/register',
    element: <RegisterPage />,
  },
  {
    path:'/products',
    element: <ProductsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
