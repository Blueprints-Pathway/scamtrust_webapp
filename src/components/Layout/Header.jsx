import { useMediaQuery } from "react-responsive";

import BellNotification from "../../assets/images/svg/bell-notification.svg";

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
    : "px-[52px] ";

  return (
    <div
      className={`${headerItemClassName} flex justify-between items-center w-full h-full shadow-md`}
    >
      <h3 className="font-medium lg:font-semibold text-xl lg:text-3xl text-colorPrimary">
        {heading}
      </h3>
      <div className="flex items-center">
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
