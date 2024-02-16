import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavData from "../../data/NavData";
import CascadeLogo from "../../assets/logo/CASCADE LOGO TRANSAPARENT.png";
import Button from "../ui/Button";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

const menuToggle = (event: React.MouseEvent<HTMLElement>) => {
  console.log("I am here");
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`flex flex-row  font-valueBlack items-center justify-between p-3`}
      >
        <aside className={`flex items-center justify-start w-18 lg:w-fit`}>
          <img
            src={CascadeLogo}
            alt="Cascade Logo"
            className={`w-full relative right-7`}
          />
        </aside>
        <nav className={`flex items-center lg:gap-56  `}>
          <ul
            className={`font-euclidMedium ${
              isOpen
                ? `block w-full h-full bg-white  flex-col items-start justify-start absolute right-0 p-10 top-20 z-50  `
                : `hidden md:flex`
            }`}
          >
            {NavData.map((item, idx) => {
              return (
                <li key={idx} className={`flex`}>
                  <NavLink
                    end={item.end}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? `py-2 px-3 rounded bg-brandBlue2x/20`
                        : `py-2 px-3 rounded hover:bg-brandBlue2x/20`
                    }
                  >
                    {item.pageName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className={`flex items-center justify-center gap-5`}>
            <Button intent={"outline"} className={`lg:mr-8`}>
              Register
            </Button>
            <button type="button" className={`md:hidden`} onClick={()=>setIsOpen(!isOpen)}>
              {isOpen ? (
                <AiOutlineClose className={`text-2xl`} />
              ) : (
                <AiOutlineAlignRight className={`text-2xl`} />
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
