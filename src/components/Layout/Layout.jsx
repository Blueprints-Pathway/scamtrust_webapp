import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import Sidenav from "./Sidenav";

const Layout = (props) => {
  const { children, heading } = props;
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const asideClassName = isTabletOrMobile
    ? "z-20 top-0 left-0 bg-colorPrimary fixed h-screen"
    : "w-[212.25px] z-30 2xl:w-[283px] top-0 left-0 bg-colorPrimary fixed h-screen";

  const headerClassName = isTabletOrMobile
    ? "fixed pl-0 w-full mb-[50px] bg-white z-20 h-[60px] top-0 left-0"
    : "fixed pl-[212.25px] 2xl:pl-[283px] z-20 w-full mb-[50px] bg-white h-[80px] 2xl:h-[133px] top-0 left-0";

  const mainClassName = isTabletOrMobile
    ? "ml-[25px] mt-[50px]"
    : "pl-[230.25px] 2xl:ml-[283px] px-[25px] 2xl:mt-[183px]";

  const animation = "transition-all delay-100 duration-500";

  return (
    <>
      <nav className={`${animation}${headerClassName} fixed`}>
        <Header heading={heading} />
      </nav>
      <aside
        className={`${animation} ${asideClassName} fixed `}
        style={{ width: !isTabletOrMobile ? "212px" : isSidenavOpen ? "150px" : "50px" }}
      >
        <Sidenav
          isSidenavOpen={isSidenavOpen}
          setIsSidenavOpen={setIsSidenavOpen}
        />
      </aside>

      <main className={`${"mainClassName"}${animation} px-[25px] `}>
        {children}
      </main>
    </>
  );
};

export default Layout;
