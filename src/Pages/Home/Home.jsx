import AboutSection from "../../Components/Home/AboutSection"
import HeroSection from "../../Components/Home/HeroSection"
import Services from "../../Components/Home/Services"
import Testimonials from "../../Components/Home/Testimonials"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default Home