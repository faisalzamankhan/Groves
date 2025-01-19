import Button from "@/components/atoms/Button";

const BookTicket = () => {
  return (
    <div className="flex items-center gap-8 mt-9 mx-[6vw] flex-wrap">
      <div>
        <h2 className="mb-4">
          Curate your <br />
          experience <br /> as you like
        </h2>
        <Button
          buttonLabel={"Book Tickets"}
          buttonicon={<img src={"/arrow_forward.svg"} alt="arrow.png" />}
        />
      </div>
      <div>
        <img src="/grove.png " className="h-full object-cover" />
        <h3>Resturants</h3>
      </div>
      <div>
        <img src="/experinced.png" className="h-full object-cover" />
        <h3>Experiences</h3>
      </div>

      <div>
        <img src="/events.png" className="h-full object-cover" />
        <h3>Events</h3>
      </div>

      <div className="flex items-center flex-wrap  mb-5">
        <img src="/map.png" className="h-full object-cover" />
        <div className="flex flex-col gap-6">
          <small>EXPERIENCE THE GROVES</small>
          <h2>Find your place</h2>
          <p>
            Our interactive map will show you the way to the
            <br /> shops and restaurants that you want to see.
          </p>
          <Button
            buttonLabel={"Open the Map"}
            buttonicon={<img src={"/arrow_forward.svg"} alt="arrow.png" />}
          />
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
