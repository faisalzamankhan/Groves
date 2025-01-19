"use client";
// Dynamic import for react-slick with SSR disabled
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ClientSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          alt="krazy.png"
          src={"/krazy.png"}
          className="w-full object-cover"
        />
        <h3 className="text-center">Little Krazy</h3>
      </div>
      <div>
        <img alt="grove.png" src={"/grove.png"} className=" " />
        <h3 className="text-center">Hawanim Groves City</h3>
      </div>
      <div>
        <img alt="picninc.png" src={"/picnic.png"} className="" />
        <h3 className="text-center">Picnic Market</h3>
      </div>
      <div>
        <img
          alt="interior.png"
          src={"/interior.png"}
          className="max-w-60 object-cover"
        />
        <h3 className="text-center">Lucaworld</h3>
      </div>
    </Slider>
  );
};

export default ClientSlider;
