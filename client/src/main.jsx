import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './components/Home'
import AddCoffee from './components/AddCoffee'
import UpdateedCoffee from './components/UpdateedCoffee'
import CoffeeDetails from './components/CoffeeDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/coffee'),
        element: <Home />,
      },
       {
        path: 'addcoffee',
        element: <AddCoffee />,
      },
       {
        path: 'update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <UpdateedCoffee />,
      },
       {
        path: 'coffee/:id',
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <CoffeeDetails />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
