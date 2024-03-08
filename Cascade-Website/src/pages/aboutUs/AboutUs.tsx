import Template from "../../widgets/Template";
import Seo from "../../components/seo/Seo";

// components
import AboutHeroSection from "./components/AboutHeroSection";
import SponsorsSection from "./components/SponsorsSection";
import MainAboutUsSection from "./components/MainAboutUsSection";
// import OurTeamSection from "./components/OurTeamSection";
import FaqSection from "./components/FaqSection";

const AboutUs = () => {
  return (
    <Template>
      <>
        <Seo
          title="Cascade | About Us Page"
          description="description for about page"
          type="Website"
          name="Cascade"
        />
        <AboutHeroSection/>
        <SponsorsSection/>
        <MainAboutUsSection/>
        {/* <OurTeamSection/> */}
        <FaqSection/>
      </>
    </Template>
  );
};

export default AboutUs;
