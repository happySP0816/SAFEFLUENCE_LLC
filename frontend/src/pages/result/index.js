import {
  AiOutlinePlaySquare,
  AiOutlinePlayCircle,
  AiOutlineDownload,
  AiOutlineEdit,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Result = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }, []);

  return (
    <div
      className={`${
        !isShow ? "h-0" : "md:h-[calc(100vh-140px)] h-[calc(100vh-115px)]"
      } duration-500 absolute left-0 bottom-0 w-full text-shadow-black bg-gray-700 bg-opacity-15 rounded-[70px] mt-5 border-t border-t-white`}
    >
      <div className="flex flex-col w-full h-full justify-around items-center text-white">
        <div className="w-full flex-1 bg-transparent rounded-b-xl p-5 flex">
          <div className="flex gap-5 overflow-x-auto pb-5 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center h-full"
              >
                <div className="h-full flex flex-col justify-end">
                  <div className="cursor-pointer flex-none flex flex-col gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-[160px] max-h-[240px] h-full border border-white rounded-[30px] items-center justify-center relative">
                    <AiOutlinePlaySquare className="text-2xl" />
                    <p className="text-lg font-[ArbutuSlab]">Short Version of Clip {e}</p>
                    <AiOutlinePlayCircle className="text-4xl" />
                  </div>
                  <div className="flex justify-around">
                    <AiOutlineDownload className="cursor-pointer text-4xl" />
                    <Link to="/edit">
                      <AiOutlineEdit className="cursor-pointer text-4xl" />
                    </Link>
                    <AiOutlineShareAlt className="cursor-pointer text-4xl" />
                  </div>
                </div>
                <div className="h-full flex flex-col justify-end">
                  <div className="cursor-pointer flex-none flex flex-col gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-[160px] max-h-[240px] h-full border border-white rounded-[30px] items-center justify-center relative">
                    <AiOutlinePlaySquare className="text-2xl" />
                    <p className="text-lg font-[ArbutuSlab]">Short Version of Clip {e}</p>
                    <AiOutlinePlayCircle className="text-4xl" />
                  </div>
                  <div className="flex justify-around">
                    <AiOutlineDownload className="cursor-pointer text-4xl" />
                    <Link to="/edit">
                      <AiOutlineEdit className="cursor-pointer text-4xl" />
                    </Link>
                    <AiOutlineShareAlt className="cursor-pointer text-4xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
