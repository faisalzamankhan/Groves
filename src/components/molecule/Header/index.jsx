import SocialLink from "./SocailLink";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-[8vw] py-5">
        <img
          src={"/logo.png"}
          alt="logo"
          width={220}
          height={50}
          className="hidden lg:inline-block"
        />
        <SocialLink />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
