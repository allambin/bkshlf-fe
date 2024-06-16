import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from "./context/AuthContext.tsx";
import AppWrapper from './AppWrapper.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  </React.StrictMode>,
)
