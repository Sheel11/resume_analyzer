import { useState } from 'react'
import './index.css'
import Navbar from './components/landing/Navbar'
import HeroSection from './components/landing/HeroSection'
import FeaturesSection from './components/landing/FeaturesSection'
import Working from './components/landing/Working'
import Footer from './components/landing/Footer'
import Anaylze from './components/Analyze'
import { Routes , Route , BrowserRouter } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import AnalyzerPage from './components/pages/AnalyzerPage'
import ProfileDashboard from './components/pages/ProfileDashboard'
import AuthManager from './components/AuthManager'
import Passwordreset from './components/pages/Passwordreset.jsx'


function App() {

  return (
    
    <BrowserRouter>
    <AuthManager>
    <Navbar />
   
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/analyze" element={<AnalyzerPage/>}/>
          <Route path="/profile" element = {<ProfileDashboard/>} />
          <Route path='/reset' element = {<Passwordreset />} ></Route>
        </Routes>
        </AuthManager>
             
    </BrowserRouter>
    
  )
}

export default App
