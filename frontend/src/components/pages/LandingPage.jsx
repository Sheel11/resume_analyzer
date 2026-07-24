import HeroSection from '../landing/HeroSection'
import FeaturesSection from '../landing/FeaturesSection'
import Footer from '../landing/Footer'
import Working from '../landing/Working'

function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <HeroSection />
      <FeaturesSection />
      <Working />
      <Footer />
    </div>
  )
}

export default LandingPage;

