import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../assets/images/svg/logo-white.svg";
import Shield from "../../assets/images/svg/shieldIcon.svg";
import Dashboard from "../../assets/images/svg/dashboard.svg";
import Transaction from "../../assets/images/svg/transaction.svg";
import Wallet from "../../assets/images/svg/wallet.svg";
import Setting from "../../assets/images/svg/setting.svg";
import Support from "../../assets/images/svg/support.svg";
import Logout from "../../assets/images/svg/logout.svg";
import { logoutUser, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";

const Sidenav = (props) => {
  const { setIsSidenavOpen, isSidenavOpen } = props;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const { data } = useSelector((state) => state.auth.user);

  const navItems = [
    {
      symbol: Dashboard,
      name: "Dashboard",
      link:
        data.usertype === "CUSTOMER"
          ? "/customer-dashboard"
          : data.usertype === "VENDOR"
          ? "/vendor-dashboard"
          : "",
    },
    {
      symbol: Transaction,
      name: "Transactions",
      link:
        data.usertype === "CUSTOMER"
          ? "/customer-transaction"
          : data.usertype === "VENDOR"
          ? "/vendor-transaction"
          : "",
    },
    { symbol: Wallet, name: "Wallet", link: "/wallet" },
    {
      symbol: Setting,
      name: "Settings",
      link: "/settings",
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ul className="mt-[58px] flex flex-col items-center w-full h-full text-[#F2F2F2]">
      {/* {!isTabletOrMobile ? ( */}
      <li
        className="cursor-pointer"
        onClick={() => navigate("/customer-dashboard")}
      >
        <img src={isTabletOrMobile ? Shield : Logo} alt="logo-white" />
      </li>
      {/* ) : (
        <></>
      )} */}

      {isTabletOrMobile ? (
        <HiMenuAlt2
          className="mt-2 w-[40px] h-[40px]"
          onClick={() => setIsSidenavOpen((prevState) => !prevState)}
        />
      ) : (
        <></>
      )}

      <li className="mt-[100px] 2xl:mt-[200px]">
        <ul className="flex flex-col justify-center">
          {navItems.map((navItem) => (
            <li
              key={navItem.name}
              className="uppercase mb-[30px] flex items-center"
            >
              <NavLink
                style={{ display: "flex" }}
                className={(navData) =>
                  navData.isActive ? "text-colorSecondary" : ""
                }
                to={navItem.link}
              >
                <span className="mr-[7px]">
                  <img src={navItem.symbol} alt={navItem.name} />
                </span>
                <span>
                  {!isTabletOrMobile ? (
                    navItem.name
                  ) : isSidenavOpen ? (
                    navItem.name
                  ) : (
                    <></>
                  )}
                </span>
              </NavLink>
            </li>
          ))}
          <li className="uppercase mt-[50px] flex items-center cursor-pointer">
            <Link to="/support" className="flex">
            <span className="mr-[7px]">
              <img src={Support} alt={"support"} />
            </span>
            {!isTabletOrMobile ? "SUPPORT" : isSidenavOpen ? "SUPPORT" : <></>}
            </Link>
          </li>
          <li
            onClick={() => {
              // dispatch(logout());
              dispatch(logoutUser());
            }}
            className="uppercase cursor-pointer mt-[40px] flex items-center"
          >
            <span className="mr-[7px]">
              <img src={Logout} alt={"logout"} />
            </span>
            {!isTabletOrMobile ? "LOGOUT" : isSidenavOpen ? "LOGOUT" : <></>}
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Sidenav;
