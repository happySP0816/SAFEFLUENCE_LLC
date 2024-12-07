import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

const Upgrade = () => {
  const [isShow, setIsShow] = useState(false);
  const [credits, setCredits] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }, []);

  const valuetext = (value) => {
    setCredits(value);
  };

  return (
    <div
      className={`${
        !isShow ? "h-0" : "md:h-[calc(100vh-140px)] h-[calc(100vh-115px)]"
      } duration-500 absolute left-0 bottom-0 w-full text-shadow-black bg-gray-700 bg-opacity-15 rounded-[70px] mt-5 border-t border-t-white`}
    >
      <div className="flex flex-col gap-5 w-full h-full justify-around items-center text-white py-2 px-7">
        <p className="w-full text-5xl text-white font-[ArchivoBlack] text-start pt-5">
          How many credits?
        </p>
        <div className="flex w-full gap-5">
          <Slider
            color="black"
            aria-label="Temperature"
            defaultValue={60}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={20}
            step={20}
            marks
            min={20}
            max={500}
          />
          <p className="text-nowrap font-[ArbutuSlab] text-xl">
            {credits} credits
          </p>
        </div>

        <div className="flex flex-col w-full gap-2 pb-5 items-center overflow-y-auto">
          <div
            className={`cursor-pointer w-full flex bg-[#ECEFF2] bg-opacity-20 rounded-[70px] h-20 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
          >
            <div className="flex flex-col gap-1 flex-none w-auto p-5 border border-white bg-gray-600 bg-opacity-50 rounded-full">
              <p className="text-white w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-start">
                15 clips
              </p>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-white w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-center">
                On Average our AI module clip 15 shorts every hour of video
                footage
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-full flex bg-transparent bg-opacity-20 rounded-[70px] h-20 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
          >
            <div className="flex flex-col gap-1 flex-1 w-[calc(100%-5rem)]">
              <p className="text-white w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-center">
                Average Editing time per clip for an editor is 40 minutes
              </p>
            </div>
            <div className="flex flex-col gap-1 flex-none w-auto p-5 border border-white bg-gray-600 bg-opacity-50 rounded-full">
              <p className="text-white w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-center">
                10 hours saved
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-full flex bg-[#ECEFF2] bg-opacity-20 rounded-[70px] h-20 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
          >
            <div className="flex flex-col gap-1 flex-none w-auto p-5 border border-white bg-gray-600 bg-opacity-50 rounded-full">
              <p className="text-white w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-center">
                $840 saved
              </p>
            </div>
            <div className="flex flex-col gap-1 flex-1 w-[calc(100%-5rem)]">
              <p className="text-white w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-center">
                On Average an editor charges $20US per short clip edited
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 bg-transparent rounded-b-xl flex flex-col gap-3 border-t border-t-white pt-5">
          <p className="w-full text-xl text-white font-[ArchivoBlack] text-center">
            Only pay for what you use No plans, no subscriptions
          </p>
          <div className="flex w-full justify-around gap-5 overflow-x-auto pb-5 items-center h-full">
            <div className="h-full flex flex-col justify-end">
              <div className="p-5 cursor-pointer flex-none flex flex-col gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-[160px] max-h-[240px] h-full border border-white rounded-[30px] items-center justify-center relative">
                <p className="text-xl">Free Plan</p>
              </div>
            </div>
            <div className="h-full flex flex-col justify-end">
              <div className="p-5 cursor-pointer flex-none flex flex-col gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-[160px] max-h-[240px] h-full border border-white rounded-[30px] items-center justify-center relative">
                <p className="text-xl">Starter Kit Credits</p>
              </div>
            </div>
            <div className="h-full flex flex-col justify-end">
              <div className="p-5 cursor-pointer flex-none flex flex-col gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-[160px] max-h-[240px] h-full border border-white rounded-[30px] items-center justify-center relative">
                <p className="text-xl">Pro Kit Credits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
