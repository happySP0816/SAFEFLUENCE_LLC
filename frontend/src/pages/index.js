const Index = ({onStart}) => {
  return (
    <div className="w-screen h-screen relative">
      <div
        className="bg-center bg-cover absolute top-0 bottom-0 right-0 left-0"
        style={{ backgroundImage: "url('/img/bg-start.png')" }}
      />
      <button onClick={onStart} className="w-80 cursor-pointer absolute bottom-8 left-[calc(50%-160px)] flex gap-3 text-white bg-gray-700 bg-opacity-90 hover:bg-opacity-100 duration-500 h-min p-5 border border-white rounded-[34px] items-center justify-center">
        <p className="text-lg font-[ArchivoBlack] text-shadow-black">
          Try Social Cut
        </p>
      </button>
    </div>
  );
};

export default Index;
