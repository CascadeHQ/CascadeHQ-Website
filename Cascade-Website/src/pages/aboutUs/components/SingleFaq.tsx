import { useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
} from "react-icons/hi2";

// images
import ArrowIcon from "../images/Arrow.svg";

interface Faq {
  question: string;
  answer: string;
}

interface SingleFaqProps {
  faq: Faq;
}

const SingleFaq: React.FC<SingleFaqProps> = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // show answers
  const handleShowAnswers = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <>
      <main>
        <div className={`cursor-pointer`} onClick={() => handleShowAnswers()}>
          <div className={`flex justify-between items-center xl:text-xl `}>
            <div>
              <h1 className={`font-valueBold text-base xl:text-xl`}>
                {faq.question}
              </h1>
            </div>
            <div>
              <button onClick={() => handleShowAnswers()}>
                {showAnswer ? (
                  <HiChevronDoubleDown />
                ) : (
                  <HiChevronDoubleRight />
                )}
              </button>
            </div>
          </div>
          {showAnswer ? (
            <div>
              <p
                className={`font-normal font-TrapRegular pt-2 text-brandGray3x text-sm leading-6 xl:text-base xl:w-[75%]`}
              >
                {faq.answer}
              </p>
            </div>
          ) : null}
          <div className={`border-b-2 pb-3`}></div>
        </div>
      </main>
    </>
  );
};

export default SingleFaq;
