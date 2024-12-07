import React from "react";
import { Link, Outlet } from "react-router-dom";
import Guides from "../guides";
import SocialAccount from "../soicalAccount";
import Schedules from "../schedules";
import PageHeader from "./pageHeader";

const PageLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen relative contents">
      <div
        className="min-w-[340px] bg-center bg-cover absolute top-0 bottom-0 right-0 left-0"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      />
      <div className="flex gap-5 w-screen h-screen p-2 md:p-5 absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
        <div className="hidden md:w-0 xl:w-[20%] xl:block pr-5 ">
          <Guides />
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 md:w-[65%] xl:w-[60%] relative">
            <div className="flex absolute w-full h-full border border-white rounded-[70px] md:border-none">
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="border border-white rounded-[70px] w-full h-full hidden md:block"
              >
                <Link to="/">
                  <p className="text-shadow-black text-nowrap w-full text-5xl text-center p-5 text-white font-[ArchivoBlack] px-5">
                    SoicalCut
                  </p>
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
          <div className="hidden md:w-[25%] xl:w-[20%] md:block pl-5 text-shadow-black">
            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos="fade-down"
                data-aos-duration="3000"
                className="flex-none flex items-center relative h-[80px] bg-gray-700 bg-opacity-15 border border-white rounded-[70px]"
              >
                <PageHeader />
              </div>
              <div className="flex-1 flex relative">
                <SocialAccount />
              </div>
              <div className="flex-none flex relative h-[120px]">
                <Schedules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
