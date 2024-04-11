import { useCallback } from "react";
import AstrixBrandingInstance from "../components/astrix-branding-instance";
import { useRouter } from "next/router";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";

const EventLanding = () => {
  const router = useRouter();

  const onEventsTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-palette-noble-black-700 overflow-hidden flex flex-row items-end justify-start pt-[23px] pb-[35px] pr-[30px] pl-[39px] box-border gap-[128px] leading-[normal] tracking-[normal] text-left text-109xl text-gray-200 font-astrix-beta-heading-s mq750:gap-[64px] mq450:gap-[32px] mq1125:flex-wrap">
      <h1 className="!m-[0] w-[361px] absolute top-[159px] left-[34px] text-inherit leading-[118px] font-bold font-inherit flex items-center z-[1] mq450:text-13xl mq450:leading-[47px] mq1050:text-32xl mq1050:leading-[71px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">ASTRIX</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">EVENTS</p>
        </span>
      </h1>
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17.3px] box-border max-w-full text-27xl text-white mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[138px] max-w-full mq450:gap-[34px] mq1050:gap-[69px]">
          <AstrixBrandingInstance
            astrixBranding="/astrix-branding1@2x.png"
            propWidth="197px"
            propPadding="unset"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[16px] mq1050:gap-[32px]">
            <div className="self-stretch h-[630px] flex flex-row items-start justify-end max-w-full">
              <div className="self-stretch w-[568px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[23px] max-w-full">
                <div className="self-stretch w-[416px] shrink-0 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:f6aba90]"
                    alt=""
                    src="/frame-1261154670@2x.png"
                  />
                </div>
                <div className="w-[412px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[478px] px-[19px] pb-[39px] box-border relative gap-[28px] [debug_commit:f6aba90] mq750:pt-[311px] mq750:pb-[25px] mq750:box-border">
                  <img
                    className="w-[564px] h-[705px] absolute !m-[0] bottom-[-38px] left-[calc(50%_-_282px)] object-cover"
                    alt=""
                    src="/image-13@2x.png"
                  />
                  <h1 className="m-0 w-[284px] relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-[28px] mq1050:text-[37px]">
                    Event Name
                  </h1>
                  <div className="w-[122px] flex flex-row items-start justify-start gap-[8px] text-xl">
                    <img
                      className="h-[27px] w-[27px] relative min-h-[27px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icons.svg"
                    />
                    <div className="flex-1 relative font-medium z-[1] mq450:text-base">
                      Location
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[416px] shrink-0 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:f6aba90]"
                    alt=""
                    src="/frame-1261154672@2x.png"
                  />
                </div>
                <img
                  className="self-stretch w-[412px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[630px] [debug_commit:f6aba90]"
                  loading="lazy"
                  alt=""
                  src="/frame-1261154671-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[330.5px] flex flex-row items-start justify-start max-w-full text-center text-lg text-palette-pac-man-50">
              <div className="ml-[-4.099999999999909px] flex-1 flex flex-row items-start justify-between pt-[16.8px] pb-[21.3px] pr-[23px] pl-[52.5px] relative shrink-0 [debug_commit:f6aba90] mq450:flex-wrap mq450:pl-5 mq450:box-border">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-81xl bg-gray-100" />
                <div className="h-full w-[163.6px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-81xl bg-darkslategray z-[1]" />
                <b
                  className="w-[62.8px] relative leading-[14px] inline-block shrink-0 [text-shadow:0px_0px_3px_rgba(0,_0,_0,_0.4)] min-w-[62.8px] cursor-pointer z-[2]"
                  onClick={onEventsTextClick}
                >
                  Events
                </b>
                <b className="relative leading-[14px] inline-block font-inter text-palette-noble-black-50 min-w-[103.9px] z-[1]">
                  Collections
                </b>
              </div>
              <div
                className="self-stretch w-[148px] relative overflow-hidden shrink-0 hidden cursor-pointer"
                onClick={onFrameClick}
              />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
    </div>
  );
};

export default EventLanding;
