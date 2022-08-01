import Logo from "../../assets/images/svg/logo-white.svg";
import Dashboard from "../../assets/images/svg/dashboard.svg";
import Transaction from "../../assets/images/svg/transaction.svg";
import Wallet from "../../assets/images/svg/wallet.svg";
import Setting from "../../assets/images/svg/setting.svg";
import Support from "../../assets/images/svg/support.svg";
import Logout from "../../assets/images/svg/logout.svg";

const Sidenav = () => {
  const navItems = [
    { symbol: Dashboard, name: "Dashboard", link: "/dashboard" },
    { symbol: Transaction, name: "Transactions", link: "/transactions" },
    { symbol: Wallet, name: "Wallet", link: "/wallet" },
    { symbol: Setting, name: "Settings", link: "/settings" },
  ];

  return (
    <ul className="mt-[58px] flex flex-col overflow-y-scroll items-center w-full h-full text-[#F2F2F2]">
      <li className="">
        <img src={Logo} alt="logo-white" />
      </li>

      <li className="mt-[100px] 2xl:mt-[200px]">
        <ul className="flex flex-col">
          {navItems.map((navItem) => (
            <li
              key={navItem.name}
              className="uppercase mb-[40px] flex items-center"
            >
              <span className="mr-[7px]">
                <img src={navItem.symbol} alt={navItem.name} />
              </span>
              {navItem.name}
            </li>
          ))}
          <li className="uppercase mt-[70px] flex items-center">
            <span className="mr-[7px]">
              <img src={Support} alt={"support"} />
            </span>
            SUPPORT
          </li>
          <li className="uppercase mt-[40px] flex items-center">
            <span className="mr-[7px]">
              <img src={Logout} alt={"logout"} />
            </span>
            LOGOUT
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Sidenav;
