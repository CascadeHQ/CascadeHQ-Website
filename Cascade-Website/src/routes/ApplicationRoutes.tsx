import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import Blog from "../pages/blog/Blog";

const ApplicationRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
  );
};

export default ApplicationRoutes;
