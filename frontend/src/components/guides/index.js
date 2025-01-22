const guideList = [
  {
    id: 2,
    src: "/img/guide/2.png",
    title: "How to use this app2",
    count: "80",
    description: "description2",
  },
  {
    id: 3,
    src: "/img/guide/3.png",
    title: "How to use this app3",
    count: "80",
    description: "description2",
  },
  {
    id: 4,
    src: "/img/guide/4.png",
    title: "How to use this app4",
    count: "80",
    description: "description2",
  },
  {
    id: 5,
    src: "/img/guide/5.png",
    title: "How to use this app5",
    count: "80",
    description: "description2",
  },
  {
    id: 6,
    src: "/img/guide/6.png",
    title: "How to use this app6",
    count: "80",
    description: "description2",
  },
  {
    id: 12,
    src: "/img/guide/2.png",
    title: "How to use this app2",
    count: "80",
    description: "description2",
  },
  {
    id: 13,
    src: "/img/guide/3.png",
    title: "How to use this app3",
    count: "80",
    description: "description2",
  },
  {
    id: 14,
    src: "/img/guide/4.png",
    title: "How to use this app4",
    count: "80",
    description: "description2",
  },
  {
    id: 15,
    src: "/img/guide/5.png",
    title: "How to use this app5",
    count: "80",
    description: "description2",
  },
  {
    id: 16,
    src: "/img/guide/6.png",
    title: "How to use this app6",
    count: "80",
    description: "description2",
  },
];

const Guides = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="pt-7 pb-5 px-5 flex flex-col gap-5 w-full h-full relative bg-gray-700 bg-opacity-15 border border-t-white border-b-white rounded-[60px] text-center"
    >
      <p className="text-shadow-black w-full text-5xl text-white font-[ArchivoBlack]">Guides</p>
      <div className="flex flex-col gap-3 overflow-y-scroll pr-1">
        {guideList.map((e, index) => (
          <div key={e.id} className="relative group">
            <div
              className={`cursor-pointer w-full flex ${
                index % 2 === 0
                  ? "bg-[#ECEFF2] bg-opacity-20"
                  : "bg-transparent"
              } rounded-[70px] h-20 p-2 gap-4 items-center hover:bg-[#ECEFF2] hover:bg-opacity-10 duration-500`}
              onClick={() => {}}
            >
              <img className="flex w-16 h-16 rounded-full" src={e.src}></img>
              <div className="flex flex-col gap-1 flex-1 w-[calc(100%-5rem)]">
                <p className="text-shadow-black text-white overflow-hidden whitespace-nowrap w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-start">
                  {e.title}
                </p>
                <p className="text-[#727272] overflow-hidden whitespace-nowrap w-full text-ellipsis font-[ArbutuSlab] text-md font-bold text-start">
                  {e.count} Shows
                </p>
              </div>
            </div>
            <div className="opacity-0 bg-black text-white text-center text-sm rounded py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 duration-500 pointer-events-none group-hover:opacity-75">
              {e.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
