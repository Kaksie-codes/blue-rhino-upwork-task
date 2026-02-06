import './App.css'
import AviationIndustry from './components/AvaitionIndustry'
import ClientTestimonials from './components/ClientTestimonials'
import Footer from './components/Footer'
import HelpingBusinesses from './components/HelpingBusinesses'
import HeroSection from './components/HeroSection'
import HitYourGoals from './components/HitYourGoals'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  

  return (
    <div className="">
      <HeroSection/>
      <HelpingBusinesses/>
      <WhyChooseUs/>
      <AviationIndustry/>
      <OurServices/>
      <ClientTestimonials/>
      <HitYourGoals/>
      <Footer/>
    </div>
  )
}

export default App
