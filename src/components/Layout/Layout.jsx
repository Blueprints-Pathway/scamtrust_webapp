import Nav from "../nav/Nav";
import Header from "./Header";
import Sidenav from "./Sidenav";

const Layout = (props) => {
  const { children, heading } = props;

  return (
    <>
      <nav className="fixed pl-[212.25px] 2xl:pl-[283px] z-20 w-full mb-[50px] bg-white h-[80px] 2xl:h-[133px] top-0 left-0">
        <Header heading={heading} />
      </nav>
      <aside className="w-[212.25px] z-30 2xl:w-[283px] top-0 left-0 bg-colorPrimary fixed h-screen">
        <Sidenav />
      </aside>

      <main className="ml-[212.25px] 2xl:ml-[283px] mt-[130px] 2xl:mt-[183px]">
        {children}
      </main>
    </>
  );
};

export default Layout;
