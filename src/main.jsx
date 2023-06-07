import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router';
import Container from './components/shared/Container';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
    <RouterProvider router={router} />
    </Container>

  </React.StrictMode>,
)
