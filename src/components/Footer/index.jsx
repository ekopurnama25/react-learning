import React from "react";
import Cooffe_Footer from "/assert/landing_page/coffe_footer01.jpeg";

const Footer = () => {
  return (
    <>
      <section className="flex justify-around bg-[#000000] mt-16 max-[780px]:mt-2 max-[780px]:justify-between mx-auto max-[780px]:w-full">
        <div className="flex flex-row items-center max-[780px]:items-start  mt-16 max-[780px]:mt-4 max-[780px]:w-full max-[780px]:p-4 p-12 mx-auto max-w-5xl max-[780px]:flex-col">
          <div className="w-full basis-1/2">
            <h1 className="font-bold text-3xl text-[#ffffff] text-justify max-[780px]:text-[24px]">
              CONTACT ME
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1 max-[780px]:text-[12px]">
              Facebook : Eko Purnama Azi
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1 max-[780px]:text-[12px]">
              Instagram : @ekopass25
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1 max-[780px]:text-[12px]">
              WhatsApp : 085281944451
            </h1>
            <h1 className="text-[#ffffff] text-justify p-1 max-[780px]:text-[12px]">
              Email : ekopurnama250498@gmail.com
            </h1>
          </div>
          <div className="w-full px-18 basis-1/2 px-14 max-[780px]:px-[0px]">
            <h1 className="font-bold text-4xl text-[#ffffff] text-justify max-[780px]:text-[24px]">
              DELICIOUS COFFEE
            </h1>
            <h1 className="text-[#ffffff] text-justify max-[780px]:text-[12px]">
              Only available in coffee shops
            </h1>
          </div>
          <div className="w-full basis-1/2 max-[780px]:mt-6">
            <img
              className="w-[215px] h-[210px] rounded-full shadow-xl max-[780px]:hidden"
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
