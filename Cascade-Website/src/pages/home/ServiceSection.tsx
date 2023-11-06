import React from "react";
import MedalOne from "../../assets/images/image 1.png";
import MedalTwo from "../../assets/images/image 2.png";

// interface Props = {}

const ServiceSection = () => {
  return (
    <>
      <section>
        <div className={`bg-service-pattern py-16 `}>
          <div className={`flex items-center`}>
            <div className={`flex flex-col`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="8"
                viewBox="0 0 86 10"
                fill="none"
              >
                <path
                  d="M3 3.48435C25.8478 3.48402 61.8281 2.11457 83 6.70645"
                  stroke="white"
                  stroke-width="6"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="8"
                viewBox="0 0 86 10"
                fill="none"
              >
                <path
                  d="M3 3.48435C25.8478 3.48402 61.8281 2.11457 83 6.70645"
                  stroke="white"
                  stroke-width="6"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 className={`text-3xl font-ruberoidBold`}>Benefits of our <br /> Service to your Students</h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 md:px-10 lg:px-20`}>
            <section >
              <div className={`bg-brandWhite1x/80 p-5`}>
                <img src={MedalOne} alt="Cascade: Medal Icon" />
                <h3>Learn on-demand Tech Skills</h3>
                <p>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
              <div>
                <img src={MedalOne} alt="Cascade: Medal Icon" />
                <h3>Learn on-demand Tech Skills</h3>
                <p>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
            </section>
            <section>
              <div>
                <img src={MedalOne} alt="Cascade: Medal Icon" />
                <h3>Learn on-demand Tech Skills</h3>
                <p>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
            </section>
            <section>
              <div>
                <img src={MedalOne} alt="Cascade: Medal Icon" />
                <h3>Learn on-demand Tech Skills</h3>
                <p>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
              <div>
                <img src={MedalOne} alt="Cascade: Medal Icon" />
                <h3>Learn on-demand Tech Skills</h3>
                <p>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
