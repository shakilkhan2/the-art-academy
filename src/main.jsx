import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router';
import Container from './components/shared/Container';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/authProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <QueryClientProvider client={queryClient}>
   <Container>
    <RouterProvider router={router} />
    <Toaster />
    </Container>
    </QueryClientProvider>
   
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
