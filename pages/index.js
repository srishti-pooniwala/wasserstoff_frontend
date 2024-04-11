import { useCallback } from "react";
import AstrixBrandingInstance from "../components/astrix-branding-instance";
import FrameComponent1 from "../components/frame-component1";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";

const CollectionLanding = () => {
  const router = useRouter();

  const onFrameClick = useCallback(() => {
    router.push("/event-landing");
  }, [router]);

  return (
    <div className="w-full relative bg-palette-noble-black-700 overflow-hidden flex flex-row items-end justify-start pt-[23px] pb-[35px] pr-0 pl-[39px] box-border gap-[162px] leading-[normal] tracking-[normal] text-left text-109xl text-gray-200 font-astrix-beta-heading-s mq750:gap-[81px] mq450:gap-[40px] mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:box-border">
      <h1 className="!m-[0] w-[361px] absolute bottom-[157px] left-[34px] text-inherit leading-[118px] font-bold font-inherit flex items-center mq450:text-13xl mq450:leading-[47px] mq1050:text-32xl mq1050:leading-[71px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">ASTRIX</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">COLLECTIBLE</p>
        </span>
      </h1>
      <div className="!m-[0] absolute h-full top-[0px] right-[72px] bottom-[0px] flex flex-row items-end justify-start gap-[71px] max-w-full text-xl text-palette-pac-man-50 mq750:flex-wrap">
        <img
          className="h-[1024px] w-[91px] relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/roll@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[480px] box-border min-h-[524px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
            <div className="w-[150px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <img
                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/frame-1261154678.svg"
              />
            </div>
            <div className="relative leading-[44px] font-medium mq450:text-base mq450:leading-[35px]">
              22k people interested
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17.3px] box-border max-w-full text-center text-lg text-gainsboro font-inter mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
          <AstrixBrandingInstance astrixBranding="/astrix-branding@2x.png" />
          <div className="self-stretch h-[760px] flex flex-row items-start justify-end pt-0 px-0 pb-7 box-border max-w-full">
            <div className="self-stretch w-[568px] overflow-x-auto shrink-0 flex flex-row items-end justify-start pt-8 px-0 pb-0 box-border gap-[25px] max-w-full z-[1]">
              <div className="self-stretch w-[851px] shrink-0 flex flex-row items-start justify-start gap-[27px] [debug_commit:f6aba90]">
                <FrameComponent1 frame1261154670="/frame-1261154670@2x.png" />
                <FrameComponent1 frame1261154670="/frame-1261154671@2x.png" />
              </div>
              <img
                className="h-[630px] w-[412px] relative overflow-hidden shrink-0 object-cover [debug_commit:f6aba90]"
                alt=""
                src="/frame-1261154672@2x.png"
              />
              <img
                className="h-[630px] w-[412px] relative overflow-hidden shrink-0 object-cover [debug_commit:f6aba90]"
                alt=""
                src="/frame-1261154671-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[350.5px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between pt-[16.8px] pb-[21.3px] pr-[26px] pl-[48.4px] box-border relative max-w-full gap-[20px] mq450:flex-wrap mq450:pl-5 mq450:box-border">
              <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-81xl bg-gray-100" />
              <b className="w-[62.8px] relative leading-[14px] inline-block shrink-0 [text-shadow:0px_0px_3px_rgba(0,_0,_0,_0.4)] min-w-[62.8px] z-[1]">
                Events
              </b>
              <div className="h-full w-[163.6px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-81xl bg-darkslategray z-[1]" />
              <b className="relative leading-[14px] inline-block text-palette-pac-man-50 min-w-[103.9px] z-[2]">
                Collections
              </b>
            </div>
            <div
              className="h-[50px] w-[140px] relative overflow-hidden shrink-0 hidden cursor-pointer"
              onClick={onFrameClick}
            />
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default CollectionLanding;
