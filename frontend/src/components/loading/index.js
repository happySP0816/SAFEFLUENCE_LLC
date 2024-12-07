import React, { useEffect, useState } from "react";

function Loading({ isLoading }) {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    if (isLoading === false) {
      setTimeout(() => {
        setIsHidden(true);
      }, 1000);
    }
  }, [isLoading]);
  return (
    <div
      className={`${
        isLoading ? "bottom-0" : "bottom-full"
      } duration-700 absolute w-screen h-screen ${
        isHidden ? "hidden" : "block"
      }`}
    >
      <div className={`w-full h-full relative contents`}>
        <div
          className="bg-center bg-cover absolute top-0 bottom-0 right-0 left-0"
          style={{ backgroundImage: "url('/img/bg.png')" }}
        />
        <div className="bg-white bg-opacity-50 absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
          <img
            className="loading max-w-[600px] max-h-[600px] h-[100vw] w-full relative mix-blend-exclusion"
            src="/img/loading.gif"
          ></img>
          <img
            className="loading w-[168px] h-[24px] relative bg-transparent"
            src="/img/loading.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Loading;
