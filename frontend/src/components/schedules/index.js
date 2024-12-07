import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const scheduleList = [
  {
    text: "Go to meeting.",
    date: "2024-11-05 10:00",
  },
  {
    text: "Upload Video.",
    date: "2024-11-05 13:00",
  },
  {
    text: "Go to gym.",
    date: "2024-11-05 15:00",
  },
];

const Schedules = () => {
  return (
    <div className="w-full h-full">
      <Link to="/calender">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="cursor-pointer w-full flex flex-col items-center justify-center text-white gap-5 h-full bg-gray-700 bg-opacity-15 hover:bg-opacity-30 duration-75 border border-t-white border-b-white rounded-[60px]"
        >
          <AiOutlineCalendar className="text-4xl" />
          <p className="text-lg font-[ArchivoBlack]">Schedules Canlendar</p>
        </div>
      </Link>
    </div>
  );
};

export default Schedules;
