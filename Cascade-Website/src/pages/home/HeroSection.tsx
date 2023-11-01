import React from "react";
import ImageOne from "../../assets/images/cute-kid-glasses-studio 1.png";
import ImageTwo from "../../assets/images/medium-shot-kid-doing-homework.png";
import ImageThree from "../../assets/images/young-african.png";
import ImageFour from "../../assets/images/young.png";

// interface Props = {}

const HeroSection = () => {
  return (
    <>
      <main>
        <div
          className={`bg-brandWhite1x grid grid-cols-1 p-4 gap-5 md:grid-cols-2`}
        >
          <div className={`flex flex-col gap-4`}>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl`}>
              We Teach, We Empower.
            </h1>
            <p className={`text-md md:text-base`}>
              And some set of body text to spice things up and better
              understanding. That’s all Init. And some set of body text to spice
              things up and better understanding. That’s all Init.{" "}
            </p>
          </div>
          <div className={`grid grid-cols-2 gap-2`}>
            <div className={`bg-brandYellow1x`}>
              <img src={ImageOne} alt="Cascade: Image of a child on glasses" />
            </div>
            <div className={`bg-brandBlue3x`}>
              <img
                src={ImageTwo}
                alt="Cascade: Image of a young boy doing his assignment"
              />
            </div>
            <div className={`bg-brandYellow1x`}>
              <img
                src={ImageThree}
                alt="Cascade: Image of a young tech boy with his laptop"
              />
            </div>
            <div className={`bg-brandBlue3x`}>
              <img
                src={ImageFour}
                alt="Cascade: Image of a a young tech girl with her tablet and laptop"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
