import { useMediaQuery } from "react-responsive";

import BellNotification from "../../assets/images/svg/bell-notification.svg";
import Search from "../../assets/images/svg/search.svg";
import RidicVentures from "../../assets/images/svg/ridic.svg";
import APlus from "../../assets/images/svg/a-plus.svg";

const VENDORS = [
  {
    logo: RidicVentures,
    name: "Ridic Ventures",
    id: "ID-60572218",
    score: "",
  },
  {
    logo: RidicVentures,
    name: "Ridic Ventures",
    id: "ID-60572218",
    score: "",
  },
  {
    logo: RidicVentures,
    name: "Ridic Ventures",
    id: "ID-60572218",
    score: "",
  },
  {
    logo: RidicVentures,
    name: "Ridic Ventures",
    id: "ID-60572218",
    score: "",
  },
];

const Header = (props) => {
  const { heading } = props;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const headerItemClassName = isTabletOrMobile
    ? "pl-[75px] pr-[25px]"
    : "px-[25px] ";

  return (
    <div
      className={`${headerItemClassName} flex justify-between items-center w-full h-full shadow-md`}
    >
      <h3 className="font-medium lg:font-semibold text-xl lg:text-3xl text-colorPrimary">
        {heading}
      </h3>
      <div className="flex items-center">
        <div className="2xl:w-[541px] mr-2 lg:mr-[56px] relative lg:w-[400px] h-[47px] md:w-[300px] w-[50px]">
          <input
            type="text"
            placeholder="Search vendor's name"
            className="bg-[#C0C0C021] w-full h-full rounded-[50px] focus:outline-none pl-5 pr-5 md:pr-[60px]"
          />
          <img
            src={Search}
            alt="search_icon"
            className="absolute h-[24px] right-[15px] -translate-x-0px] md:right-[20px] top-1/2 -translate-y-1/2"
          />
          <div className="absolute py-3 px-7 left-1/2 z-30 -translate-x-1/2 w-[380px] max-h-[150px] overflow-y-scroll bg-white">
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-xs">Recent Search</p>
              <p className="text-xs">Competence Score</p>
            </div>
            <div className="flex flex-col ">
              {VENDORS.map((vendor, idx) => {
                const { name, logo, id, score } = vendor;
                return (
                  <div className="flex justify-between">
                    <div className="flex items-center hover:opacity-75 mb-3 cursor-pointer" key={idx}>
                      <div className="w-[28px] mr-3 grid place-content-center h-[28px] bg-[#EFF3FF] overflow-hidden">
                        <img
                          src={logo}
                          alt={name}
                          className="w-[25px] h-[25px] rounded-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-colorPrimary">{name}</p>
                        <p className="text-xs text-[#7D8287]">{id}</p>
                      </div>
                    </div>
                    <div className="w-[25px] h-[25px] mr-7 bg-[#32A45299] rounded-full grid place-content-center">
                      <img src={APlus} alt="A+" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <img
          src={BellNotification}
          alt="notification"
          className="w-[22px] h-[24px] mr-2 lg:mr-[56px]"
        />
        <span className="lg:w-[46px] w-[30px] h-[30px] lg:h-[46px] font-bold text-base lg:text-[21px] text-white bg-[#E36969] grid place-content-center overflow-hidden rounded-full">
          CO
        </span>
      </div>
    </div>
  );
};

export default Header;
