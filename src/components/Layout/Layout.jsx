import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import Sidenav from "./Sidenav";

const Layout = (props) => {
  const { children, heading } = props;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const asideClassName = isTabletOrMobile
    ? "w-[50px] z-20 top-0 left-0 bg-colorPrimary fixed h-screen"
    : "w-[212.25px] z-30 2xl:w-[283px] top-0 left-0 bg-colorPrimary fixed h-screen";

  const headerClassName = isTabletOrMobile
    ? "fixed pl-0 w-full mb-[50px] bg-white h-[60px] top-0 left-0"
    : "fixed pl-[212.25px] 2xl:pl-[283px] z-20 w-full mb-[50px] bg-white h-[80px] 2xl:h-[133px] top-0 left-0";

  const mainClassName = isTabletOrMobile
    ? "ml-[50px] mt-[50px]"
    : "ml-[212.25px] 2xl:ml-[283px] mt-[130px] 2xl:mt-[183px]";

  const animation = "transition-all delay-100 duration-500";

  return (
    <>
      <nav className={`${animation}${headerClassName}`}>
        <Header heading={heading} />
      </nav>
      <aside className={`${animation} ${asideClassName}`}>
        <Sidenav />
      </aside>

      <main className={`${mainClassName}${animation}`}>{children}</main>
    </>
  );
};

export default Layout;
