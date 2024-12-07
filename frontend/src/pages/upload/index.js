import {
  AiOutlineUpload,
  AiOutlineGoogle,
  AiOutlineClose,
} from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [isShow, setIsShow] = useState(false);
  const [file, setFile] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const statusRef = useRef();
  const loadTotalRef = useRef();
  const navigate = useNavigate();

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }, []);

  const handleFileChange = (event) => {
    setUploadStatus(true);
    const file = event.target.files[0];
    // const url = URL.createObjectURL(file);
    setFile(URL.createObjectURL(file));
    var formData = new FormData();
    formData.append("image", file);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", ProgressHandler, false);
    // xhr.addEventListener("load", SuccessHandler, false);
    // xhr.addEventListener("error", ErrorHandler, false);
    // xhr.addEventListener("abort", AbortHandler, false);
    xhr.open("POST", "fileupload.php");
    xhr.send(formData);
  };

  const ProgressHandler = (e) => {
    loadTotalRef.current.innerHTML = `${e.loaded} / ${e.total} bytes`;
    var percent = (e.loaded / e.total) * 100;
    setProgress(Math.round(percent));
    if (buffer < 100) {
      console.log(progress);
      const newBuffer = buffer + 1 + Math.random() * 10;
      setBuffer(newBuffer > 100 ? 100 : newBuffer);
    }
    statusRef.current.innerHTML = Math.round(percent) + "% uploaded";

    if (Math.round(percent) === 100) {
      navigate("/result");
    }
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div
      className={`${
        !isShow ? "h-0" : "md:h-[calc(100vh-140px)] h-[calc(100vh-115px)]"
      } duration-500 absolute left-0 bottom-0 w-full text-shadow-black bg-gray-700 bg-opacity-15 rounded-[70px] mt-5 border-t border-t-white`}
    >
      <div className="flex flex-col w-full h-full justify-evenly items-center text-white">
        <div className="w-full h-min pt-7 bg-transparent rounded-b-xl p-2 flex">
          {uploadStatus ? (
            <div className="flex flex-col justify-center items-center w-full gap-5 overflow-x-auto pb-2">
              <div className="flex w-full items-center justify-center font-[ArbutuSlab]">
                <span ref={statusRef}></span>&nbsp;
                {"("}
                <span ref={loadTotalRef}></span>
                {")"}
              </div>
              <LinearProgress
                color="success"
                className="w-full h-3"
                variant="buffer"
                value={progress}
                valueBuffer={buffer}
              />
              <div className="flex gap-5">
                {progress < 100 && (
                  <button
                    onClick={handleChoose}
                    className="cursor-pointer flex-none flex gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-auto h-min p-5 border border-white rounded-[30px] items-center justify-center"
                  >
                    <AiOutlineClose className="text-2xl" />
                    <p className="text-sm font-[ArchivoBlack] text-shadow-black">
                      Cancel Uploading
                    </p>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-full gap-5 overflow-x-auto pb-2">
              <input
                value={file}
                className="ursor-none bg-transparent hover:outline-none border border-white rounded-[10px] p-2 w-2/3 placeholder:text-gray-200"
                readOnly={true}
                placeholder="https://drive.google.com/file/d/1234567890/view?usp=sharing"
              ></input>
              <input
                ref={inputRef}
                className="VideoInput_input hidden"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
              />
              <div className="flex gap-5">
                <button
                  onClick={handleChoose}
                  className="cursor-pointer flex-none flex gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-auto h-min p-5 border border-white rounded-[40px] items-center justify-center"
                >
                  <AiOutlineUpload className="text-2xl" />
                  <p className="text-lg font-[ArchivoBlack] text-shadow-black">
                    Upload Video
                  </p>
                </button>
                <button className="cursor-pointer flex-none flex gap-3 text-white bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 w-auto h-min p-5 border border-white rounded-[34px] items-center justify-center">
                  <AiOutlineGoogle className="text-2xl" />
                  <p className="text-lg font-[ArchivoBlack] text-shadow-black">
                    Google Drive
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
        {/* <div className="w-full flex-none h-min bg-transparent rounded-b-xl p-5 flex">
          <div className="flex flex-col w-full gap-5 pb-5 items-center overflow-y-auto">
            <div
              className={`cursor-pointer w-full flex bg-[#ECEFF2] bg-opacity-20 rounded-[70px] h-24 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
            >
              <img
                className="flex w-20 h-20 rounded-full object-cover object-center"
                src="/img/video.jpg"
              ></img>
              <div className="flex flex-col gap-1 flex-1 w-[calc(100%-5rem)]">
                <p className="text-white w-full text-ellipsis font-[ArchivoBlack] text-xl font-bold text-start">
                  On Average our AI module clip 15 shorts every hour of video
                  footage
                </p>
              </div>
            </div>
            <div
              className={`cursor-pointer w-full flex bg-transparent bg-opacity-24 rounded-[70px] h-24 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
            >
              <div className="flex flex-col gap-1 flex-1 w-[calc(100%-5rem)]">
                <p className="text-white w-full text-ellipsis font-[ArchivoBlack] text-xl font-bold text-end">
                  Average Editing time per clip for an editor is 40 minutes
                </p>
              </div>
              <img
                className="flex w-20 h-20 rounded-full object-cover object-center border-2 border-white"
                src="/img/clock.png"
              ></img>
            </div>
            <div
              className={`cursor-pointer w-full flex bg-[#ECEFF2] bg-opacity-20 rounded-[70px] h-24 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
            >
              <img
                className="flex w-20 h-20 rounded-full object-cover object-center"
                src="/img/money.jpg"
              ></img>
              <div className="flex flex-col gap-1 flex-1 w-[calc(100%-5rem)]">
                <p className="text-white w-full text-ellipsis font-[ArchivoBlack] text-xl font-bold text-start">
                  On Average an editor charges $20US per short clip edited
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Upload;
