import Button from "@/components/atoms/Button";

const AccessTicketSection = () => {
  return (
    <div>
      <div className="max-w-[740px] w-full mx-auto pt-8 flex flex-col gap-6 px-[2vw] ">
        <h2 className="text-center">Mall of: Endless Possibilities</h2>
        <p className="text-center">
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the <br /> industry standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and <br />
          scrambled it to make a type specimen book.
        </p>
        <img src="/groves.png" className=" object-cover w-full" />
        <div className="px-7 py-8 rounded-xl bg-[#2E3914] ">
          <p>25 SR/GUEST</p>
          <div className="flex justify-between items-center ">
            <div>
              <h3 className="mt-4">Get your General Access Ticket</h3>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum <br />
                has been the industry’s standard dummy text e
              </p>
            </div>
            <img src="/arrow.png" alt="arrow.png" width={40} height={29} />
          </div>
        </div>
      </div>
      <div className="ml-[8vw] mt-12 mr-[2vw]">
        <h2>
          Book General Acess ticket <br />
          enjoy the attarctions for free
        </h2>
        <Button
          className={"my-6"}
          buttonLabel={"Book General Access Ticket"}
          buttonicon={<img src={"/arrow_forward.svg"} alt="arrow.png" />}
        />
      </div>
    </div>
  );
};

export default AccessTicketSection;
