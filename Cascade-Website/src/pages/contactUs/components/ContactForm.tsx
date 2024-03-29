
const ContactForm = () => {
  const handleFormSubmit = () =>{
  }
  return (
    <div className="md:w-3/5 lg:w-1/2">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-y-1 mb-5">
          <label
            htmlFor=""
            className="font-TrapRegular font-normal text-sm lg:text-base lg:leading-5"
          >
            Name
          </label>
          <input
            type="text"
            title="Name"
            className="p-2.5 bg-brandBlue3x opacity-[16%] rounded-lg text-brandBlack8x text-base outline-0"
          />
        </div>
        <div className="flex flex-col gap-y-1 mb-5">
          <label
            htmlFor=""
            className="font-TrapRegular font-normal text-sm lg:text-base lg:leading-5"
          >
            Email
          </label>
          <input
            type="text"
            title="Please enter an email address"
            className="p-2.5 bg-brandBlue3x opacity-[16%] rounded-lg text-brandBlack8x text-base outline-0"
          />
        </div>
        <div className="flex flex-col gap-y-1 mb-5">
          <label
            htmlFor=""
            className="font-TrapRegular font-normal text-sm lg:text-base lg:leading-5"
          >
            What service are you interested in
          </label>
          <select
            name=""
            id=""
            title="Select a Service"
            className="p-2.5 bg-brandBlue3x opacity-[16%] rounded-lg text-brandBlack8x text-base outline-0"
          >
            <option value="Select project type" selected className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-y-1 mb-5">
          <label
            htmlFor=""
            className="font-TrapRegular font-normal text-sm lg:text-base lg:leading-5"
          >
            Budget
          </label>
          <select
            name=""
            id=""
            title="Budget"
            className="p-2.5 bg-brandBlue3x opacity-[16%] rounded-lg text-brandBlack8x text-base outline-0"
          >
            <option value="Select project type" selected className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
            <option value="Select project type" className="bg-white">
              Select project type
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-y-1 mb-5">
          <label
            htmlFor=""
            className="font-TrapRegular font-normal text-sm lg:text-base lg:leading-5"
          >
            Message
          </label>
          <textarea
            name=""
            id=""
            title="Message"
            className="p-2.5 lg:h-40 bg-brandBlue3x opacity-[16%] rounded-lg text-brandBlack8x text-base outline-0 resize-none"
          />
        </div>
        <button className="font-DegularDiplayBold text-sm lg:text-xl w-full rounded-lg text-white p-2.5 bg-brandBlue5x hover:opacity-60">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
