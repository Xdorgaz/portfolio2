import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection'
import Portfolio from './components/Portfolio'
import App from './components/App'
import ContactSection from './components/ContactSection'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header/>
     <Herosection/>
     <Aboutsection/>
     <Portfolio/>
     <ContactSection/>
  </StrictMode>,
)