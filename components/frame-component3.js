const FrameComponent3 = () => {
  return (
    <div className="!m-[0] absolute h-full top-[0px] right-[308px] bottom-[0px] flex flex-row items-start justify-start gap-[43px] text-left text-7xl text-white font-astrix-beta-heading-s">
      <img
        className="h-[1024px] w-[91px] relative overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/roll@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-[470px] px-0 pb-0">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-2xl">
          Artist Lineup
        </h3>
      </div>
      <div className="!m-[0] absolute top-[567px] left-[121px] flex flex-row items-start justify-start">
        <img
          className="h-[150px] w-[145px] relative rounded-lg overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-1261154686@2x.png"
        />
        <img
          className="h-[198px] w-48 absolute !m-[0] top-[calc(50%_-_99px)] right-[-180px] rounded-lg overflow-hidden shrink-0 object-cover z-[1]"
          alt=""
          src="/frame-1261154684@2x.png"
        />
      </div>
      <img
        className="h-[105px] w-[105px] absolute !m-[0] right-[78px] bottom-[35px] rounded-md object-cover"
        loading="lazy"
        alt=""
        src="/image-131@2x.png"
      />
    </div>
  );
};

export default FrameComponent3;
