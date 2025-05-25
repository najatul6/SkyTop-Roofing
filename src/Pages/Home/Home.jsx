import AboutSection from "../../Components/Home/AboutSection"
import Contact from "../../Components/Home/Contact"
import CTA from "../../Components/Home/CTA"
import HeroSection from "../../Components/Home/HeroSection"
import Services from "../../Components/Home/Services"
import Testimonials from "../../Components/Home/Testimonials"
import WhyChooseUs from "../../Components/Home/WhyChooseUs"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTA/>
      <Contact/>
    </div>
  )
}

export default Home