import React from "react";
import ImageOne from "../../assets/images/cute-kid-glasses-studio 1.png";
import ImageTwo from "../../assets/images/medium-shot-kid-doing-homework.png";
import ImageThree from "../../assets/images/young-african.png";
import ImageFour from "../../assets/images/young.png";
import Button from "../../components/ui/Button";

// interface Props = {}

const HeroSection = () => {
  return (
    <>
      <main>
        <div
          className={`bg-brandWhite1x grid grid-cols-1 p-3 gap-5 md:grid-cols-2 lg:px-24`}
        >
          <div className={`flex flex-col gap-4 lg:pr-24`}>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl`}>
              We Teach, We Empower.
            </h1>
            <p className={`text-md md:text-base`}>
              And some set of body text to spice things up and better
              understanding. That’s all Init. And some set of body text to spice
              things up and better understanding. That’s all Init.{" "}
            </p>
            <div>
            <Button content="Register your student"/>
          </div>
          </div>
          <div className={`grid grid-cols-2 gap-2 md:gap-4`}>
            <div className={`bg-brandYellow1x rounded-l-full flex items-end justify-end`}>
              <img src={ImageOne} alt="Cascade: Image of a child on glasses" className={``}/>
            </div>
            <div className={`bg-brandBlue3x rounded-xl flex items-end justify-end`}>
              <img
                src={ImageTwo}
                alt="Cascade: Image of a young boy doing his assignment"
              />
            </div>
            <div className={`bg-brandBlue3x rounded-xl flex items-end justify-end`}>
              <img
                src={ImageThree}
                alt="Cascade: Image of a young tech boy with his laptop"
              />
            </div>
            <div className={`bg-brandYellow1x rounded-r-full flex items-end justify-star`}>
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
