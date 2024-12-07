import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  return (
    <div className="absolute flex justify-between items-center w-full h-hull rounded-[70px] px-5">
      <div className="flex w-full h-full justify-around items-center text-white">
        <Link to="/upload">
          <div className="relative group">
            <div
              className={`flex-none flex w-12 h-12 justify-around bg-cover bg-center items-center text-white rounded-[20px] hover:border hover:border-white  border-transparent relative ${
                location.pathname === "/upload"
                  ? "border-4 !border-white"
                  : "border-1"
              }`}
              style={{ backgroundImage: "url('/img/upload.png')" }}
            />
            <div className="opacity-0 bg-black text-white text-center text-sm rounded py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 duration-500 pointer-events-none group-hover:opacity-75">
              Upload
            </div>
          </div>
        </Link>
        <Link to="/upgrade">
          <div className="relative group">
            <div
              className={`flex-none flex w-12 h-12 justify-around bg-cover bg-center items-center text-white rounded-[20px] hover:border hover:border-white  border-transparent relative ${
                location.pathname === "/upgrade"
                  ? "border-4 !border-white"
                  : "border-1"
              }`}
              style={{ backgroundImage: "url('/img/1.png')" }}
            />
            <div className="opacity-0 bg-black text-white text-center text-sm rounded py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 duration-500 pointer-events-none group-hover:opacity-75">
              Upgrade Plan
            </div>
          </div>
        </Link>
        <Link to="/profile">
          <div className="relative group">
            <div
              className={`flex-none flex w-12 h-12 justify-around bg-cover bg-center items-center text-white rounded-[20px] hover:border hover:border-white  border-transparent relative ${
                location.pathname === "/profile"
                  ? "border-4 !border-white"
                  : "border-1"
              }`}
              style={{ backgroundImage: "url('/img/user/user1.png')" }}
            />
            <div className="opacity-0 bg-black text-white text-center text-sm rounded py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 duration-500 pointer-events-none group-hover:opacity-75">
              Profile
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
