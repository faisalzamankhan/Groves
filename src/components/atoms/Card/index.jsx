const Card = ({ imgsrc, buttonLabel, cardTitle }) => {
  return (
    <div className="px-2 py-2 rounded-3xl bg-[#2E3914] ">
      <img src={imgsrc} className="w-full object-cover" />
      <div className="flex justify-between items-center px-7 mb-9">
        <div>
          <h3 className="text-justify my-2">{cardTitle}</h3>
          <button className="bg-[linear-gradient(180deg,#AD8749,#DCBB75)] px-5 p-1  rounded-2xl text-white flex items-center justify-center">
            <small>{buttonLabel}</small>
          </button>
        </div>
        <img src={"/arrow.png"} alt="arrow.png" width={40} height={29} />
      </div>
    </div>
  );
};

export default Card;
