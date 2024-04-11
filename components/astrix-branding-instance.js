import { useMemo } from "react";

const AstrixBrandingInstance = ({ astrixBranding, propWidth, propPadding }) => {
  const astrixBrandingInstanceStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className="w-[217px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative text-left text-21xl text-palette-pac-man-500 font-astrix-beta-heading-s"
      style={astrixBrandingInstanceStyle}
    >
      <img
        className="h-[74.2px] w-[74.2px] absolute !m-[0] top-[-8px] left-[-23.8px] object-contain"
        loading="lazy"
        alt=""
        src={astrixBranding}
      />
      <div className="flex-1 flex flex-row items-start justify-end">
        <h1 className="m-0 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit mq450:text-5xl mq450:leading-[38px] mq1050:text-13xl mq1050:leading-[51px]">
          Astrix.
        </h1>
      </div>
    </div>
  );
};

export default AstrixBrandingInstance;
