import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@shared/translation/i18n'
import '@styles/index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
