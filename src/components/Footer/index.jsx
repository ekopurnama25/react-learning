import React from "react";
import Cooffe_Footer from "/assert/landing_page/coffe_footer01.jpeg";

const Footer = () => {
  return (
    <>
      <section className="flex justify-around bg-[#000000] mt-16">
        <div className="flex flex-row items-center mt-16 p-12 mx-auto max-w-5xl">
          <div className="w-full basis-1/2">
            <h1 className="font-bold text-3xl text-[#ffffff] text-justify">
              CONTACT ME
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1">
              Facebook : Eko Purnama Azi
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1">
              Instagram : @ekopass25
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1">
              WhatsApp : 085281944451
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1">
              Email : ekopurnama250498@gmail.com
            </h1>
          </div>
          <div className="w-full px-18 basis-1/2 px-14">
            <h1 className="font-bold text-4xl text-[#ffffff] text-justify">
              DELICIOUS COFFEE
            </h1>
            <h1 className="text-[#ffffff] text-justify">
              Only available in coffee shops
            </h1>
          </div>
          <div className="w-full basis-1/2">
            <img
              className="w-[215px] h-[210px] rounded-full shadow-xl"
              src={Cooffe_Footer}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
