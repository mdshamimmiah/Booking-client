import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './route/Route'
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto'>
    <ToastContainer></ToastContainer>
   <AuthProvider>
   <RouterProvider router={Router} />
   </AuthProvider>
   </div>
  </React.StrictMode>,
)
