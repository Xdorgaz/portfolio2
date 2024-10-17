import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Herosection from './components/Herosection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header/>
     <Herosection/>
  </StrictMode>,
)
