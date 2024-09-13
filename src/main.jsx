import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Homepage from './Pages/Homepage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className=' mx-auto'>
  <RouterProvider router={router} />
  </div>
  </StrictMode>,
)
