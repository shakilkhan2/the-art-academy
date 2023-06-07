import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router';
import Container from './components/shared/Container';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/authProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <Container>
    <RouterProvider router={router} />
    </Container>
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
