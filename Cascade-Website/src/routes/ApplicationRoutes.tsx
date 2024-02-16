import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";

const ApplicationRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
  );
};

export default ApplicationRoutes;
