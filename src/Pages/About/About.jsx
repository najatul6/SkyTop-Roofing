import CertificationsAwards from "../../Components/About/CertificationsAwards"
import CompanyOverview from "../../Components/About/CompanyOverview"
import FAQ from "../../Components/About/FAQ"
import OurMission from "../../Components/About/OurMission"
import ProjectGallery from "../../Components/About/ProjectGallery"
import SustainabilityCommunity from "../../Components/About/SustainabilityCommunity"
import TeamSection from "../../Components/About/TeamMember"
import HeroBanner from "../../Components/Shared/HeroBanner"

const About = () => {
    return (
        <div>
            <HeroBanner
                title={" About SkyTop Roofing"}
                subtitle={"Trusted local roofing experts with years of experience in keeping your home safe and secure."}
            />
            <CompanyOverview/>
            <OurMission/>
            <TeamSection/>
            <ProjectGallery/>
            <FAQ/>
            <CertificationsAwards/>
            <SustainabilityCommunity/>
        </div>
    )
}

export default About