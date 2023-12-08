import React from "react";

import Img_Dashboard from "/assert/landing_page/img_dash.png";

const HomeAdmin = () => {
  return (
    <>
      <div className="p-8">
        <section className="w-full h-auto bg-[#c7d2fe] rounded-xl shadow-xl">
          <div className="flex flex-row p-4 ">
            <div className="flex basis-11/12 ">
              <div className="flex flex-col">
                <div className="p-2">
                  <h1 className="font-bold text-[32px] drop-shadow-xl text-[#1e3a8a]">
                    Time to Drink Coffee
                  </h1>
                </div>
                <div className="mt-1 p-2">
                  <h1 className="text-[18px] text-justify text-[#1f2937] drop-shadow-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    blanditiis laudantium esse veritatis temporibus atque
                    quisquam, provident nulla necessitatibus ipsam iure
                    voluptatibus voluptatum quia in? Totam inventore unde enim
                    dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Esse, hic itaque, assumenda labore laborum dolore est
                    et nam numquam ratione.
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <img className="w-[250px] h-[200px]" src={Img_Dashboard} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeAdmin;
