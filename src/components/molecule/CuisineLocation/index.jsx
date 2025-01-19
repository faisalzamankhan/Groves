import Card from "@/components/atoms/Card";

const CuisineLocation = () => {
  return (
    <div className="mx-[8vw] text-center mt-12 flex flex-col gap-4">
      <h2>Experience the Finest Cuisine</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the <br />
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and <br />
        scrambled it to make a type specimen book.
      </p>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-14 mt-6">
        <Card
          cardTitle={"Vida Vera"}
          buttonLabel={"100 SR PER GUEST"}
          imgsrc={"/vida.png"}
        />
        <Card
          cardTitle={"Zama Zulu"}
          buttonLabel={"100 SR PER GUEST"}
          imgsrc={"/zamazulu.png"}
        />
        <Card
          cardTitle={"Khawaja Yanni"}
          buttonLabel={"100 SR PER GUEST"}
          imgsrc={"/kawajas.png"}
        />
        <Card
          cardTitle={"Yamagata"}
          buttonLabel={"100 SR PER GUEST"}
          imgsrc={"/yamgata.png"}
        />
      </div>
    </div>
  );
};

export default CuisineLocation;
