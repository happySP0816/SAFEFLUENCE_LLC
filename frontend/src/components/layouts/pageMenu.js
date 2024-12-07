import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlineUpload,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const menuList = [
  {
    icon: AiOutlineHome,
    path: "/",
  },
  {
    icon: AiOutlineUpload,
    path: "/upload",
  },
  {
    icon: AiOutlineUser,
    path: "/profile",
  },
  {
    icon: AiOutlineSetting,
    path: "/setting",
  },
  {
    icon: AiOutlineMenu,
    path: "/menu",
  },
];

const PageMenu = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center">
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="hidden md:block left-[35%] w-[35%] h-[40px] bg-gray-700 bg-opacity-35 rounded-[70px] mt-5"
      >
        <div className="flex w-full h-full justify-around items-center text-white">
          {menuList.map((e, index) => (
            <Link to={e.path} key={index}>
              <e.icon
                className={`${
                  location.pathname === e.path
                    ? "text-white font-bold"
                    : "text-[#F1F0F0]"
                } text-xl cursor-pointer`}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:h-20 h-40 pt-20 md:pt-0">
        <div className="flex justify-around px-5 items-center w-full h-full">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="cursor-pointer md:hidden flex-none flex w-11 h-11 justify-around bg-gray-700 bg-opacity-25 hover:bg-opacity-50 duration-75 items-center text-white rounded-[15px] border border-white"
          >
            <AiOutlineHome className="text-xl" />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="hidden sm:block flex-1 bg-center bg-no-repeat bg-contain h-[50%]"
            style={{ backgroundImage: "url('/img/logo.png')" }}
          />
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="block sm:hidden flex-1 bg-center bg-no-repeat bg-contain h-[40%]"
            style={{ backgroundImage: "url('/img/logo.png')" }}
          />
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="cursor-pointer md:hidden flex-none flex w-11 h-11 justify-around bg-gray-700 bg-opacity-25 hover:bg-opacity-50 duration-75 items-center text-white rounded-[15px] border border-white"
          >
            <AiOutlineMenu className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMenu;
