import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'




createRoot(document.getElementById('root')).render(

  
  <BrowserRouter>
    <GoogleOAuthProvider clientId='356786464920-84mso4polsolfoui9fsuns06di9p47qt.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
,
)
