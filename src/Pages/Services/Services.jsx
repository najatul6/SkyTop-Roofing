import ServicesList from "../../Components/Services/ServicesList"
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
        </div>
    </div>
  )
}

export default Services