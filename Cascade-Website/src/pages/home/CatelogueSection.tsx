import React from "react";
import JsImg from "../../assets/images/js.png";
import Button from "../../components/ui/Button";
// interface Props = {}

const CatelogueSection = () => {
  return (
    <>
      <article>
        <section className={``}>
          <div className={`flex items-center`}>
            <div className={`flex flex-col`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="10"
                viewBox="0 0 86 10"
                fill="none"
              >
                <path
                  d="M3 3.48435C25.8478 3.48402 61.8281 2.11457 83 6.70645"
                  stroke="#28BBEC"
                  stroke-width="6"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="10"
                viewBox="0 0 86 10"
                fill="none"
              >
                <path
                  d="M3 3.48435C25.8478 3.48402 61.8281 2.11457 83 6.70645"
                  stroke="#28BBEC"
                  stroke-width="6"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 className={`text-2xl font-ruberoidBold md:text-3xl`}>
              Our Courses{" "}
            </h2>
          </div>
          <section className={`grid grid-cols-1 gap-7 p-5 md:grid-cols-2 lg:p-20 lg:grid-cols-3`}>
            <aside
              className={`flex flex-col gap-4 px-6 py-10 shadow-xl rounded-xl w-full`}
            >
              <div className={`max-w-[343px] max-h-[243px] overflow-hidden`}>
                <img
                  src={JsImg}
                  alt="Cascade: Javascript programming language"
                  className={`rounded-xl w-full`}
                />
              </div>
              <h2 className={` text-3xl font-madeTommyBold`}>
                Frontend Development
              </h2>
              <p className={`text-sm font-ruberoidRegular`}>
                The program is designed to teach you how to start and boost your
                content creation career regardless of your niche interest.
              </p>
              <div className={`relative`}>
                <Button intent={"moreBtn"}>Learn More</Button>
                <div
                  className={`bg-brandBlue3x/50 rounded-full w-20 h-full absolute top-0`}
                ></div>
              </div>
            </aside>
            <aside
              className={`flex flex-col gap-4 px-6 py-10 shadow-xl rounded-xl`}
            >
              <div className={`max-w-[343px] max-h-[243px] overflow-hidden`}>
                <img
                  src={JsImg}
                  alt="Cascade: Javascript programming language"
                  className={`rounded-xl w-full`}
                />
              </div>
              <h2 className={` text-3xl font-madeTommyBold`}>
                Frontend Development
              </h2>
              <p className={`text-sm font-ruberoidRegular`}>
                The program is designed to teach you how to start and boost your
                content creation career regardless of your niche interest.
              </p>
              <div className={`relative`}>
                <Button intent={"moreBtn"}>Learn More</Button>
                <div
                  className={`bg-brandBlue3x/50 rounded-full w-20 h-full absolute top-0`}
                ></div>
              </div>
            </aside>
            <aside
              className={`flex flex-col gap-4 px-6 py-10 shadow-xl rounded-xl`}
            >
              <div className={`max-w-[343px] max-h-[243px]  overflow-hidden`}>
                <img
                  src={JsImg}
                  alt="Cascade: Javascript programming language"
                  className={`rounded-xl w-full`}
                />
              </div>
              <h2 className={` text-3xl font-madeTommyBold`}>
                Frontend Development
              </h2>
              <p className={`text-sm font-ruberoidRegular`}>
                The program is designed to teach you how to start and boost your
                content creation career regardless of your niche interest.
              </p>
              <div className={`relative`}>
                <Button intent={"moreBtn"}>Learn More</Button>
                <div
                  className={`bg-brandBlue3x/50 rounded-full w-20 h-full absolute top-0`}
                ></div>
              </div>
            </aside>
          </section>
        </section>
      </article>
    </>
  );
};

export default CatelogueSection;
