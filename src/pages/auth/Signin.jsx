import Logo from "../../components/branding/Logo/Logo";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Button from "../../components/UI/Button";
import InputGroup from "../../components/UI/InputGroup";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative min-h-screen">
      <div className="relative lg:block hidden bg-[#F9F9F9] px-[63px] 2xl:px-[89px] py-[36px] 2xl:py-[51px]">
        <Logo />
        <CustomerTestimony />
      </div>
      <div className="relative">
        <div className="block lg:hidden px-[63px] 2xl:px-[89px] py-[36px] 2xl:py-[51px]">
          <Logo />
        </div>
        <form className="px-[20px] lg:px-[63px] 2xl:px-[89px] absolute mt-10 lg:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[420px] 2xl:w-[560px]">
          <h3 className="text-colorPrimary mb-[30px] font-extrabold text-2xl">
            Welcome Back
          </h3>

          <div className="mb-[30px]">
            <InputGroup placeHolder="Email Address" type="email" />
          </div>
          <div className="mb-[30px]">
            <InputGroup placeHolder="Password" type="password" />
          </div>

          <div className="flex justify-between font-normal text-sm 2xl:text-xl text-[#8E8E8E] mb-[75px] 2xl:mb-[100px]">
            <div className="">
              <span>Remember Me </span>
              <input type="checkbox" />
            </div>
            <a className="">Forgot Password? </a>
          </div>

          <Button>Continue</Button>

          <div className="mt-[10px] text-center text-sm 2xl:text-xl text-[#8E8E8E]">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-colorPrimary font-medium">
              Create
            </a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
