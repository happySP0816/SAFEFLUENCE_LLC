const soicalAccountList = [
  {
    src: "/img/soical/tiktok.png",
    text: "TikTok",
  },
  {
    src: "/img/soical/snapchat.png",
    text: "Snapchat",
  },
  {
    src: "/img/soical/x.png",
    text: "X",
  },
  {
    src: "/img/soical/instagram.jpg",
    text: "Instagram",
  },
  {
    src: "/img/soical/facebook.png",
    text: "Facebook",
  },
  {
    src: "/img/soical/youtube.png",
    text: "YouTube",
  },
];

const SocialAccount = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="3000"
      className="pt-7 pb-5 px-5 w-full flex flex-col gap-5 h-[calc(100vh-280px)] bg-gray-700 bg-opacity-15 border border-t-white border-b-white rounded-[60px]"
    >
      <p className="w-full text-2xl text-white font-[ArchivoBlack]">
        Connect your socials
      </p>
      <div className="flex flex-col gap-2 overflow-y-scroll pr-1">
        {soicalAccountList.map((e, index) => (
          <div
            key={e.text}
            className={`cursor-pointer w-full flex ${
              index % 2 === 0 ? "bg-[#ECEFF2] bg-opacity-20" : "bg-transparent"
            } text-white rounded-[70px] h-16 p-2 gap-4 items-center`}
          >
            <img className="w-12 h-12 rounded-full" src={e.src}></img>
            <p className="overflow-hidden whitespace-nowrap w-full text-ellipsis font-[ArbutuSlab] text-xl font-bold text-start">
              Connect {e.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccount;
