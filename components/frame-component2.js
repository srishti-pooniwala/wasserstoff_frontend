const FrameComponent2 = () => {
  return (
    <div className="w-[452px] flex flex-col items-start justify-start gap-[81px] min-w-[452px] max-w-full text-left text-7xl text-white font-astrix-beta-heading-s mq750:min-w-full mq450:gap-[40px] mq1125:flex-1">
      <h3 className="m-0 w-72 relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block mq450:text-2xl">
        Explore Youre First Event
      </h3>
      <div className="w-[385px] flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border gap-[21px] max-w-full text-38xl">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-15xl mq1050:text-27xl">
          Event Name
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-3xl">
          <img
            className="h-[27px] w-[27px] absolute !m-[0] bottom-[0px] left-[6px]"
            alt=""
            src="/icons.svg"
          />
          <img
            className="h-[27px] w-[27px] absolute !m-[0] bottom-[0px] left-[140px]"
            alt=""
            src="/icons-2.svg"
          />
          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
            <div className="w-[339px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="relative leading-[28px] font-semibold inline-block min-w-[68px] mq450:text-lg mq450:leading-[22px]">
                Venue
              </div>
              <div className="relative leading-[28px] font-semibold whitespace-nowrap mq450:text-lg mq450:leading-[22px]">
                04/3/2024 @19:00
              </div>
            </div>
          </div>
        </div>
        <div className="w-[328px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-base">
          <div className="h-[104px] flex-1 relative tracking-[0.15px] leading-[24px] font-semibold inline-block">{`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[139px]">
        <img
          className="h-[150px] w-[145px] relative rounded-lg overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-1261154685@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[21px]">
        <button className="cursor-pointer [border:none] py-2.5 px-5 bg-palette-pac-man-500 rounded-21xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-goldenrod">
          <b className="relative text-5xl leading-[32px] font-astrix-beta-heading-s text-palette-noble-black-600 text-left">
            Join Waitlist
          </b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
