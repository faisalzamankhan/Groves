import { svg } from "@/assets/svgs";
import Button from "@/components/atoms/Button";

const SocialLink = () => {
  const imgSrc = [
    {
      src: "/tiktok.png",
      alt: "tiktok",
      width: 19,
      height: 22,
    },
    {
      src: "/instagram.png",
      alt: "instagram",
      width: 22,
      height: 22,
    },
    {
      src: "/twitter.png",
      alt: "twitter",
      width: 22,
      height: 22,
    },
    {
      src: "/snapchat.png",
      alt: "snapchat",
      width: 22,
      height: 22,
    },
  ];
  return (
    <div className=" items-center gap-4  hidden lg:flex">
      {imgSrc?.map(({ src, alt }, index) => (
        <img src={src} width={19} height={22} alt={alt} key={index} />
      ))}
      <Button buttonLabel={"Log in"} />
      {svg.dropdownIcon}
      <img src={"/flag.png"} width={19} height={22} alt={"flag"} />
      <p>English</p>
    </div>
  );
};

export default SocialLink;
