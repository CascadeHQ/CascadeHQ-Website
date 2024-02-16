import React from "react";

// interface Props = {}

const ServiceSection = () => {
  return (
    <>
      <section>
        <div className={`bg-brandBlue4x py-16 flex flex-col gap-10`}>
          <div className={`flex items-center justify-center`}>
            <h2 className={`text-2xl font-ruberoidBold md:text-3xl`}>Benefits of our Service to your Students</h2>
          </div>
          <div className={`grid grid-cols-1 gap-8 items-center justify-center px-5 md:grid-cols-3 md:px-10 lg:px-20`}>
            <section className={`grid grid-cols-1 gap-8`}>
              <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
              <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
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
                <h3 className={`font-ruberoidBold text-lg`}>Learn on-demand Tech Skills</h3>
                <p className={`font-madeTommyLight text-xm`}>
                  some brief explanation, ok. some brief explanation, ok. some
                  brief explanation, ok. some brief explanation, ok. some brief
                  explanation, ok. some brief explanation, ok.
                </p>
              </div>
              <div className={`flex flex-col gap-2 bg-brandWhite1x/80 p-5 rounded-xl shadow-2xl`}>
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
