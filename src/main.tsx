import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Services from './pages/Services.tsx'
import ServiceDetailsPage from './pages/ServiceDetailsPage.tsx'
import Sectors from './pages/Sectors.tsx'
import Projects from './pages/Projects.tsx'
import ProjectDetailsPage from './pages/ProjectDetails.tsx'
import Insights from './pages/Insights.tsx'
import ContactUs from './pages/ContactUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="service/:slug" element={<ServiceDetailsPage />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:slug" element={<ProjectDetailsPage />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
