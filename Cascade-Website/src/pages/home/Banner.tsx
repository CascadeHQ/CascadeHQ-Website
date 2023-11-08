import React from "react";
import Button from "../../components/ui/Button";


const Banner = () => {
  return (
    <>
      <section>
        <aside className={`flex flex-col justify-center items-center gap-4 bg-brandBlue3x py-12 `}>
          <h1 className={`font-ruberoidBold text-brandWhite1x text-3xl`}>Get your Students registered today</h1>
          <p className={`font-madeTommyLight text-sm text-center px-96`}>
            And some set of body text to spice things up and better
            understanding. That’s all Init. And some set of body text to spice
            things up and better understanding.
          </p>
          <div className={`flex gap-4`}>
            <Button intent={"primary"}>Get your school invovled</Button>
            <Button intent={"neutral"}>
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
              </svg>{" "}
              Book a call
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Banner;
