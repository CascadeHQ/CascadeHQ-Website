import React from "react";
import { Link } from "react-router-dom";
import NavData from "../../data/NavData";
import CascadeLogo from "../../assets/logo/CASCADE LOGO TRANSAPARENT.png";
import Button from "../ui/Button";

const NavBar = () => {
  return (
    <header>
      <nav className={`flex bg-brandBlue2x/10 items-center justify-between px-5`}>
        <Link to={`/`}>
          <img src={CascadeLogo} alt="Cascade Logo" />
        </Link>
        <ul className={`flex gap-5 font-ruberoidBold text-sm`}>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about-us`}>About</Link>
          </li>
          <li>
            <Link to={`/`}>Courses</Link>
          </li>
          <li>
            <Link to={`/`}>Help</Link>
          </li>
          <li>
            <Link to={`/`}>Our story</Link>
          </li>
        </ul>
        <Link to={`/`} >
          {" "}
          <Button intent={"outline"} className={`lg:mr-8`}>
            Get your school involved
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
