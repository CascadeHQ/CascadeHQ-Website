// component
import SingleFaq from "./SingleFaq";


const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Cascade?",
      answer:
        "The Crivia app is a fun quiz app that allows players competein crypto quiz matches, learn about the world of web3 and crypto in a fun and entertaining manner and earn from their knowledge.",
    },
    {
      id: 2,
      question: "What is Cascade?",
      answer:
        "The Crivia app is a fun quiz app that allows players competein crypto quiz matches, learn about the world of web3 and crypto in a fun and entertaining manner and earn from their knowledge.",
    },
    {
      id: 3,
      question: "What is Cascade?",
      answer:
        "The Crivia app is a fun quiz app that allows players competein crypto quiz matches, learn about the world of web3 and crypto in a fun and entertaining manner and earn from their knowledge.",
    },
    {
      id: 4,
      question: "What is Cascade?",
      answer:
        "The Crivia app is a fun quiz app that allows players competein crypto quiz matches, learn about the world of web3 and crypto in a fun and entertaining manner and earn from their knowledge.",
    },
    {
      id: 5,
      question: "What is Cascade?",
      answer:
        "The Crivia app is a fun quiz app that allows players competein crypto quiz matches, learn about the world of web3 and crypto in a fun and entertaining manner and earn from their knowledge.",
    },
    {
      id: 6,
      question: "What is Cascade?",
      answer:
        "The Crivia app is a fun quiz app that allows players competein crypto quiz matches, learn about the world of web3 and crypto in a fun and entertaining manner and earn from their knowledge.",
    },
  ];
  return (
    <>
      <main>
        <div className={`px-5 my-24`}>
          <div className={`text-center`}>
            <h1
              className={`font-madeTommyExtraBold font-bold text-3xl xl:text-[40px] text-brandGreen2 xl:leading-[48.41px]`}
            >
              Frequently <br /> Asked Questions 
            </h1>
          </div>
          <div
            className={`flex flex-col gap-y-2.5 mt-10 xl:mt-16 mx-auto my-0 xl:w-3/5`}
          >
            {faqs.map((faq) => (
              <SingleFaq key={faq.id} faq={faq}/>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FaqSection;
