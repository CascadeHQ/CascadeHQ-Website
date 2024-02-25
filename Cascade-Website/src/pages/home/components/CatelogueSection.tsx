import JsImg from "../images/js.png";
import Button from "../../../components/ui/Button";
import { GoArrowUpRight } from "react-icons/go";

// interface Props = {}

const CatelogueSection = () => {
  return (
    <>
      <article>
        <section className={`py-14 lg:px-16`}>
          <div className={`flex items-center justify-center`}>
            <h2 className={`text-3xl font-DegularDiplayBold md:text-5xl`}>
              Our Courses{" "}
            </h2>
          </div>
          <section
            className={`grid grid-cols-1 gap-10 p-5 md:grid-cols-2 lg:p-20`}
          >
            <aside
              className={`flex flex-col gap-4 bg-brandBlue3x px-6 py-10 shadow-xl rounded-xl w-full`}
            >
              <div className={`flex flex-col items-center justify-center`}>
                <h2 className={` text-3xl font-DegularDiplayBold`}>
                  Frontend Development
                </h2>
                <p className={`text-lg font-TrapMedium text-center py-4`}>
                  The program is designed to teach you how to start and boost
                  your content creation career regardless of your niche
                  interest.
                </p>
                <div className={`flex gap-2 md:justify-normal`}>
                  <Button intent={"outline"}>
                    Learn More{" "}
                    <span className={`text-xl`}>
                      <GoArrowUpRight />
                    </span>
                  </Button>
                </div>
              </div>
              <div className={`py-5   overflow-hidden`}>
                <img
                  src={JsImg}
                  alt="Cascade: Javascript programming language"
                  className={`rounded-xl w-full`}
                />
              </div>
            </aside>
            <aside
              className={`flex flex-col gap-4 bg-brandBlue3x px-6 py-10 shadow-xl rounded-xl w-full`}
            >
              <div className={`flex flex-col items-center justify-center`}>
                <h2 className={` text-3xl font-DegularDiplayBold`}>
                  Frontend Development
                </h2>
                <p className={`text-lg font-TrapMedium text-center py-4`}>
                  The program is designed to teach you how to start and boost
                  your content creation career regardless of your niche
                  interest.
                </p>
                <div className={`flex gap-2 md:justify-normal`}>
                  <Button intent={"outline"}>
                    Learn More{" "}
                    <span className={`text-xl`}>
                      <GoArrowUpRight />
                    </span>
                  </Button>
                </div>
              </div>
              <div className={`py-5   overflow-hidden`}>
                <img
                  src={JsImg}
                  alt="Cascade: Javascript programming language"
                  className={`rounded-xl w-full`}
                />
              </div>
            </aside>
          </section>
        </section>
      </article>
    </>
  );
};

export default CatelogueSection;
