import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import ProviderContext from './Utility/Provider/ProviderContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </ProviderContext>
  </React.StrictMode>
);
