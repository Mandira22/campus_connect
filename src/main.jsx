import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import HeroSection from './Components/Hero.jsx'
import Content from './Components/Content.jsx'
import CompanySection from './Components/CompanySection.jsx'
import FeaturedJobs from './Components/FeaturedJobs.jsx'
import HireByStartups from './Components/HireByStartups.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <HeroSection/>
    <CompanySection/>
    <Content/>
    <FeaturedJobs/>
    <HireByStartups/>
  </StrictMode>
)
