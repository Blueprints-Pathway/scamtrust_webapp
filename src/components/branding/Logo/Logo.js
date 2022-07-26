import LogoIcon from "../../../assets/images/svg/logo.svg";
import LogoIconSm from "../../../assets/images/svg/logo-sm.svg";

const Logo = ({ logosm }) => {
  if (logosm)
    return <img src={LogoIconSm} alt="logo" className="w-[164px] h-[69px]" />;
  return <img src={LogoIcon} alt="logo" className="w-[164px] h-[69px]" />;
};

export default Logo;
