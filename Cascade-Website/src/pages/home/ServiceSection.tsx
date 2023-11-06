import React from "react";
import MedalOne from "../../assets/images/image 1.png";
import MedalTwo from "../../assets/images/image 2.png";

// interface Props = {}

const ServiceSection = () => {
  return (
    <>
      <section>
        <div className={`bg-brandYellow1x py-16 flex flex-col gap-10`}>
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
            <h2 className={`text-xl font-ruberoidBold md:text-3xl`}>Benefits of our <br /> Service to your Students</h2>
          </div>
          <div className={`grid grid-cols-1 gap-8 items-center justify-center px-5 md:grid-cols-3 md:px-10 lg:px-20`}>
            <section className={`grid grid-cols-1 gap-8`}>
              <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
                <img src={MedalOne} alt="Cascade: Medal Icon" className={`w-14`}/>
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
              <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
                <img src={MedalTwo} alt="Cascade: Medal Icon" className={`w-14`}/>
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
            </section>
            <section>
            <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
                <img src={MedalOne} alt="Cascade: Medal Icon" className={`w-14`}/>
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
            </section>
            <section className={`grid grid-cols-1 gap-8`}>
            <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
                <img src={MedalTwo} alt="Cascade: Medal Icon" className={`w-14`}/>
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
              <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
                <img src={MedalOne} alt="Cascade: Medal Icon" className={`w-14`}/>
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
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
