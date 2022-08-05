import BellNotification from "../../assets/images/svg/bell-notification.svg";

const Header = (props) => {
  const { heading } = props;

  return (
    <div className="w-full h-full shadow-md px-[52px] flex justify-between items-center">
      <h3 className="font-semibold text-3xl text-colorPrimary">{heading}</h3>

      <div className="flex items-center">
        <img
          src={BellNotification}
          alt="notification"
          className="w-[22px] h-[24px] mr-[56px]"
        />
        <span className="w-[46px] font-bold text-[21px] text-white h-[46px] bg-[#E36969] grid place-content-center overflow-hidden rounded-full">
          CO
        </span>
      </div>
    </div>
  );
};

export default Header;
