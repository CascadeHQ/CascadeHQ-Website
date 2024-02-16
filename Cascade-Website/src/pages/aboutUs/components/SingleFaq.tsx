import { useState } from "react";

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
        <div className={``}>
          <div className={`flex justify-between items-center xl:text-xl `}>
            <div>
              <h1
                className={`font-madeTommyExtraBold font-bold text-base xl:text-xl`}
              >
                {faq.question}
              </h1>
            </div>
            <div>
              <button onClick={() => handleShowAnswers()}>
                <img src={ArrowIcon} alt="icon" />
              </button>
            </div>
          </div>
          {showAnswer ? (
            <div>
              <p
                className={`font-madeTommyThin font-normal text-sm leading-6 xl:text-base xl:w-[75%]`}
              >
                {faq.answer}
              </p>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
};

export default SingleFaq;
