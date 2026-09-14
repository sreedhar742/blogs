import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './MultiBlogApp'
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
