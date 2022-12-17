import Logo from "../branding/Logo/Logo";

const SignupWrapper = (props) => {
  const { children, headingText, showSecuredLogo } = props;

  return (
    <div className="2xl:py-[51px] bg-white py-[19px] lg:py-[38.25px] px-[32px] lg:px-[67.5px] 2xl:px-[90px] relative min-h-screen">
      <Logo />

      <div className="mt-[15px] lg:mt-[31px] w-[350px] lg:w-[534.75px] 2xl:w-[713px] pl-[16px] lg:pl-[37.5px] 2xl:pl-[50px] pr-[76.25px] 2xl:pr-[103px] text-left absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border shadow-md">
        <div> {headingText}</div>

        {children}

        {showSecuredLogo && (
          <div className="flex relative items-end justify-center mb-[12px] mx-[90px]">
            <div className="absolute left-[22%] lg:left-[25%] 2xl:left-[35%]">
              <p className="text-[#706E6E] font-semibold flex justify-center text-base">Secured by</p>
            </div>
            <div className="h-[31px] w-[75px] absolute left-[80%] -translate-x-[80%] lg:left-[60%] lg:-translate-x-[60%] bottom-[20px]">
              <Logo logosm={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupWrapper;
