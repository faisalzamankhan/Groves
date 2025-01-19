const Footer = () => {
  return (
    <footer className="text-white flex justify-between border-t-2 border-b-2 border-[#514c4c] ">
      <div className="mx-[8vw]  w-full mt-7">
        <div className="flex justify-between flex-wrap">
          <h2 className="mb-4">
            Join us for
            <br />
            an unforgettable experience
          </h2>
          <div className="flex  flex-col items-center   gap-5">
            <p>DOWNLOAD THE GROVES APP</p>
            <div className="flex gap-5">
              <img
                src="/appleStore.png"
                alt="appleStore"
                className="h-full  object-cover"
              />
              <img
                src="/googlePlayStore.png"
                alt="googlePlayStore"
                className="h-full  object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid xs:grid-col-1  lg:grid-cols-3 mt-12">
          <div className="flex flex-col gap-3">
            <p>LOCATION</p>
            <p>
              Al-Hizam Park <br />
              Al-Semairi, Yanbu Al Bahr 46455 <br />
              Riyadh Saudi Arabia
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>WORKING HOURS</p>
            <p>
              Sun until Thurs: 4:00PM <br />
              Fri & Sat: 2:30PM
            </p>
            <p>
              Gates Close at: Sat until Wed: 12:00AM <br />
              Thu & Fri: 12:30AM
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>GUEST SERVICE CALL</p>
            <p>cc@thegroves-sa.com 920001672 </p>
            <p>+966556631309</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 my-12">
          <div className="flex w-full  items-center justify-between flex-wrap gap-4 ">
            <img className="" src="/logo.png" width={220} height={50} />
            <div className="flex gap-5 ">
              <img className="" width={22} height={22} src="/tiktok.png" />
              <img className="" width={22} height={22} src="/instagram.png" />
              <img className="" width={22} height={22} src="/twitter.png" />
              <img className="" width={22} height={22} src="/snapchat.png" />
            </div>
          </div>

          <div>
            <div className="flex w-full  items-center justify-between flex-wrap">
              <ul className="flex gap-10">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>
                  ©{new Date().getFullYear()} The Groves for Entertainment
                </li>
              </ul>

              <div className="flex items-center gap-5">
                <img className="" width={22} height={22} src="visa.png" />
                <img className="" width={18} height={18} src="masterCard.png" />
                <img
                  className=""
                  width={18}
                  height={18}
                  src="americanExpress.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
