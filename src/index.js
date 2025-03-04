import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './pages/Search'
import NotFoundPage from './pages/NotFoundPage'

import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <Search />,
  errorElement: <NotFoundPage />
}, {
  path: '/:page',
  element: <Search />
}])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
