import ServicesList from "../../Components/Services/ServicesList"
import WhyChooseUs from "../../Components/Services/WhyChooseUs"
import HeroBanner from "../../Components/Shared/HeroBanner"

const Services = () => {
  return (
    <div>
        <HeroBanner 
        title={"Our Roofing Services"}
        subtitle={"Quality roofing solutions tailored for your home and budget."}
        />
        <div className="space-y-24">
            <ServicesList/>
            <WhyChooseUs/>
        </div>
    </div>
  )
}

export default Services