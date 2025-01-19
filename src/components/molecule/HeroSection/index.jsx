import Button from "@/components/atoms/Button";

const HeroSection = () => {
  return (
    <main className=" mx-[8vw] mt-20">
      <small>KHAWAJA YANNI</small>
      <h1>
        The new <br />
        era of luxury
      </h1>
      <p className="mt-3">
        lorem Ipsum is simply dummy text of the printing and <br />
        typesetting industry.Lorem Ipsum
      </p>
      <Button
        className="mt-10"
        buttonLabel={`Book reservation now`}
        buttonicon={<img src={"/arrow_forward.svg"} alt="arrow.png" />}
      />
    </main>
  );
};

export default HeroSection;
