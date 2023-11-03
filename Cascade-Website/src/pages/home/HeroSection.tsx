import React from "react";
import ImageOne from "../../assets/images/cute-kid-glasses-studio 1.png";
import ImageTwo from "../../assets/images/medium-shot-kid-doing-homework.png";
import ImageThree from "../../assets/images/young-african.png";
import ImageFour from "../../assets/images/young.png";
import { Button } from "../../components/ui/Button";

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
            <div className={`flex gap-2`}>
              <Button variant="primary">Get your school invovled</Button>
              <Button variant="neutral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                    fill="#28BBEC"
                  />
                </svg> Book a call
              </Button>
            </div>
            <div></div>
          </div>
          <div className={`grid grid-cols-2 gap-2 md:gap-4`}>
            <div
              className={`bg-brandYellow1x rounded-l-full flex items-end justify-end`}
            >
              <img
                src={ImageOne}
                alt="Cascade: Image of a child on glasses"
                className={``}
              />
            </div>
            <div
              className={`bg-brandBlue3x rounded-xl flex items-end justify-end`}
            >
              <img
                src={ImageTwo}
                alt="Cascade: Image of a young boy doing his assignment"
              />
            </div>
            <div
              className={`bg-brandBlue3x rounded-xl flex items-end justify-end`}
            >
              <img
                src={ImageThree}
                alt="Cascade: Image of a young tech boy with his laptop"
              />
            </div>
            <div
              className={`bg-brandYellow1x rounded-r-full flex items-end justify-star`}
            >
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
