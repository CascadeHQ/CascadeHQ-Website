import React from "react";
import { NavLink } from "react-router-dom";

const ContactText = () => {
  return (
    <div className="flex flex-col gap-y-10 md:w-2/5 lg:w-1/2">
      <div>
        <h1 className="font-DegularDiplayBold font-bold text-3xl lg:text-5xl mb-2">
          Contact Us
        </h1>
        <p className="font-TrapRegular font-normal text-sm lg:text-xl lg:leading-6 lg:w-4/5">
          Have some big idea, questions or development for us? Then reach out
          we'd love to hear about it and provide help.
        </p>
      </div>

      <div>
        <h1 className="font-DegularDiplayBold text-3xl font-bold lg:text-5xl mb-2">
          Email
        </h1>
        <p className="font-TrapRegular font-normal text-sm lg:text-xl lg:leading-6 lg:w-4/5 xl:w-full">
          beebs@gmail.com
        </p>
      </div>

      <div>
        <h1 className="font-DegularDiplayBold font-bold text-3xl lg:text-5xl mb-2">
          Socials
        </h1>
        <div className="flex flex-col gap-y-3">
          <NavLink to="">
            <p className="font-TrapRegular font-normal text-sm lg:text-xl lg:leading-6 lg:w-4/5 hover:underline">
              Instagram
            </p>
          </NavLink>
          <NavLink to="">
            <p className="font-TrapRegular font-normal text-sm lg:text-xl lg:leading-6 lg:w-4/5 hover:underline">
              Twitter
            </p>
          </NavLink>
          <NavLink to="">
            <p className="font-TrapRegular font-normal text-sm lg:text-xl lg:leading-6 lg:w-4/5 hover:underline">
              Facebook
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
