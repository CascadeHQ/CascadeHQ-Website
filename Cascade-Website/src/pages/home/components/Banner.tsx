import Button from "../../../components/ui/Button";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <>
      <section>
        <aside
          className={`flex flex-col justify-center items-center gap-4 bg-brandBlue3x py-12 px-5 md:px-24`}
        >
          <h1
            className={`text-brandWhite1x font-DegularDiplayBold text-center  text-5xl lg:text-6xl`}
          >
            Get your Students registered today
          </h1>
          <p
            className={`text-md text-center font-TrapRegular px-10 lg:px-96`}
          >
            And some set of body text to spice things up and better
            understanding. That’s all Init. And some set of body text to spice
            things up and better understanding.
          </p>
          <div className={`flex gap-4`}>
            <Button intent={"outline"}>
              Register{" "}
              <span className={`text-xl`}>
                <GoArrowUpRight />
              </span>
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Banner;
