import Nav from "../nav/Nav";
import SideNav from "../sideNav/SideNav";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div>HEADER</div>
      <div>
        <aside className="w-[212.25px] 2xl:w-[283px] bg-colorPrimary fixed">
          Side navigation
        </aside>
        <main className="ml-[212.25px] 2xl:ml-[283px]">{children}</main>
      </div>
    </>
  );
};

export default Layout;
