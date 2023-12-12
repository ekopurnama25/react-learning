import React from "react";
import LandingPages from "/assert/landing_page/img_04.png";
import Coffe_capuciono from "/assert/landing_page/capucino_coffe.jpg";
import Coffe_Susu from "/assert/landing_page/susu_coffe.png";
import Coffe_Item from "/assert/landing_page/coffe_item.jpg";
import Barista01 from "/assert/landing_page/barista_01.jpg";
import Barista02 from "/assert/landing_page/barista-02.png";
import Barista03 from "/assert/landing_page/barista_03.jpg";

const Home = () => {
  return (
    <>
      <section className="flex justify-around items-center mx-auto max-w-5xl min-[800px]:mt-24">
        <div className="flex flex-row items-center max-[780px]:flex-col border-1 border-[#000]">
          <div className="w-full basis-1/2 max-[780px]:p-16 border-2 border-[#000]">
            <h1 className="font-bold text-8xl text-[#991b1b] max-[780px]:text-[42px] max-[780px]:items-center">
              Coffee
            </h1>
            <h1 className="font-bold text-3xl text-[#991b1b]">
              Shopping for Coffee at Cafe 50%
            </h1>
            <h1 className="font-bold text-1xl mt-2 text-justify text-[#4b5563]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              repellendus pariatur, nemo perferendis provident laudantium
              inventore numquam quis, illum, dolore expedita nisi? Optio, quos!
              Perferendis nesciunt vel possimus iste earum.
            </h1>
            <div className="mt-2">
              <button
                to="/product"
                className="bg-[#86198f] text-white rounded-full h-8 w-96 shadow-md shadow-violet-600"
              >
                <p className="items-center">Detail Menu Coffee in Cafe</p>
              </button>
            </div>
          </div>
          <div className="items-center w-full basis-1/2">
            <img className="w-[780px] h-[400px]" src={LandingPages} alt="" />
          </div>
        </div>
      </section>
      <section className="flex justify-around bg-[#f1f5f9] mt-24">
        <div className="flex flex-row items-center mx-auto gap-x-8 max-w-5xl mt-24">
          <div className="w-full px-18 basis-1/2">
            <img
              className="w-[350px] h-[250px] rounded-lg drop-shadow-xl"
              src={Coffe_capuciono}
              alt=""
            />
          </div>
          <div className="w-full basis-1/2">
            <img
              className="w-[350px] h-[250px] rounded-lg drop-shadow-xl"
              src={Coffe_Item}
              alt=""
            />
          </div>
          <div className="w-full basis-1/2">
            <img
              className="w-[350px] h-[250px] rounded-lg drop-shadow-xl"
              src={Coffe_Susu}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex justify-around bg-[#f1f5f9]">
        <div className="flex flex-row items-center mt-24 mx-auto max-w-5xl">
          <h1 className="font-bold text-6xl text-[#000000]">
            Information Make Coffee
          </h1>
        </div>
      </section>
      <section className="flex justify-around bg-[#f1f5f9]">
        <div className="flex flex-row items-center mt-8 m-16 mx-auto max-w-5xl">
          <h1 className="text-2xl text-[#52525b] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
            illum cumque? Necessitatibus voluptates natus accusantium officia,
            eius autem et earum tenetur, corrupti ducimus nisi similique aliquam
            dolore culpa molestias ea. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eius nisi minus modi molestiae? Doloremque
            voluptatibus, inventore ipsum fugit at, laboriosam temporibus
            impedit cum molestias odit quia esse voluptatum eum quam.
          </h1>
        </div>
      </section>
      <section className="flex justify-around mx-auto max-w-5xl">
        <div className="flex flex-row items-center m-8">
          <h1 className="font-bold text-6xl text-[#000000]">Barista Caffe</h1>
        </div>
      </section>
      <section className="flex justify-around mx-auto max-w-5xl">
        <div className="flex flex-row items-center gap-x-32 mt-10">
          <div className="w-full px-18 basis-1/2">
            <img
              className="w-[250px] h-[250px] rounded-full shadow-xl"
              src={Barista01}
              alt=""
            />
          </div>
          <div className="w-full px-18 basis-1/2">
            <img
              className="w-[250px] h-[250px] rounded-full shadow-xl"
              src={Barista02}
              alt=""
            />
          </div>
          <div className="w-full px-18 basis-1/2">
            <img
              className="w-[250px] h-[250px] rounded-full shadow-xl"
              src={Barista03}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex justify-around mx-auto max-w-5xl">
        <div className="flex flex-row items-center gap-x-32 mt-16">
          <div className="w-full px-18 basis-1/2">
            <h1 className="text-2xl text-[#52525b] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
              illum cumque? Necessitatibus voluptates natus accusantium officia,
              eius autem et earum tenetur, corrupti ducimus nisi similique
              aliquam dolore culpa molestias ea.
            </h1>
          </div>
          <div className="w-full px-18 basis-1/2">
            <h1 className="text-2xl text-[#52525b] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
              illum cumque? Necessitatibus voluptates natus accusantium officia,
              eius autem et earum tenetur, corrupti ducimus nisi similique
              aliquam dolore culpa molestias ea.
            </h1>
          </div>
          <div className="w-full px-18 basis-1/2">
            <h1 className="text-2xl text-[#52525b] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
              illum cumque? Necessitatibus voluptates natus accusantium officia,
              eius autem et earum tenetur, corrupti ducimus nisi similique
              aliquam dolore culpa molestias ea.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
