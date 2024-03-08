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
            className={`text-brandWhite1x font-DegularDiplayBold text-center  text-4xl lg:text-6xl`}
          >
            Register your students for world of possibilities.
          </h1>
          <p
            className={`text-md text-center font-TrapRegular px-6 lg:px-80 lg:text-lg`}
          >
            Through our interactive curriculum, tailored for various age groups, we introduce fundamental concepts in coding, design, and digital literacy, fostering a strong foundation for future success in the ever-evolving digital landscape
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
