import { ArrowSwitch, ArrowSwitchLeft } from "../public/Svgs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../public/Helpers";

const Firstpage = () => {
  const [ads, setAds] = useState([
    //bring best promo prod from database
    {
      id: 1,
      name: "macbook",
      pic: "../src/Pics/a.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 2,
      name: "makeup",
      pic: "../src/Pics/makeup.jpg",
      ispromo: true,
      promotion: 40,
      rating: 3.5,
      price: 200,
    },
    {
      id: 3,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 4,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
  ]);
  const [currentAd, setCurrentAd] = useState(0);
  const user = User;

  return (
    <div className="w-calc(100% - 40px) mx-4 my-3">
      {user?.role === 3 && <Link
        to="/admin/homepics">
        <div className="w-full text-center bg-white shadow-xl rounded-xl text-black pt-1 pb-[6px] my-2">
          Change Pics
        </div>
      </Link>}
      <div className="flex gap-4 flex-col md:flex-row justify-start items-center w-full">
        <div className="relative md:w-[65%] w-full md:h-[416px] h-[226px] smal:h-[276px] lil:h-[316px]">
          <button
            onClick={() => {
              if (currentAd === ads.length - 1) {
                setCurrentAd(0);
              } else {
                setCurrentAd(currentAd + 1);
              }
            }}
            className="absolute right-1 top-[50%]"
          >
            <ArrowSwitch />
          </button>
          <button
            onClick={() => {
              if (currentAd === 0) {
                setCurrentAd(ads.length - 1);
              } else {
                setCurrentAd(currentAd - 1);
              }
            }}
            className="absolute left-1 top-[50%]"
          >
            <ArrowSwitchLeft />
          </button>
          <img
            className="bg-cover duration-1 ease-in-out w-full h-full object-cover"
            src={ads[currentAd].pic}
            alt=""
          />
        </div>
        <div className="md:w-[35%] w-full flex flex-row md:flex-col gap-4">
          <div className="w-full h-[156px] smal:h-[200px]">
            <img
              className="bg-cover h-full w-full object-cover"
              src={ads[0].pic}
              alt=""
            />
          </div>
          <div className="w-full h-[156px] smal:h-[200px]">
            <img
              className="bg-cover w-full h-full object-cover"
              src={ads[0].pic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
