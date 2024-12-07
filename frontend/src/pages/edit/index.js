import { useEffect, useState } from "react";
import CreativeEditorSDKComponent from "./creativeEditorSDK";

const Edit = () => {
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
      } duration-500 absolute left-0 bottom-0 w-full bg-gray-700 bg-opacity-15 rounded-[70px] mt-5 border-t border-t-white`}
    >
      <div className=" overflow-autoflex flex-col w-full h-full justify-around items-center text-white">
        <div className="w-full h-full flex-1 bg-transparent rounded-b-xl flex">
            <CreativeEditorSDKComponent />
        </div>
      </div>
    </div>
  );
};

export default Edit;
