import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import CatelogueSection from "./components/CatelogueSection";
import TestimoniesSection from "./components/TestimoniesSection";
import FaQSection from "./components/FaQSection";
import Seo from "../../components/seo/Seo";
import Banner from "./components/Banner";
import Template from "../../widgets/Template";

// interface Props = {}

const Home = () => {
  return (
    <Template>
      <>
        <Seo
          title="Cascade | Home Page"
          description="description for about page"
          type="Website"
          name="Cascade"
        />
        <HeroSection />
        <ServiceSection />
        <CatelogueSection />
        <TestimoniesSection />
        <Banner />
        <FaQSection />
      </>
    </Template>
  );
};

export default Home;
