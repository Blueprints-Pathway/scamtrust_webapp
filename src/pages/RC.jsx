import Logo from "../components/branding/Logo/Logo";
import SignupWrapper from "../components/HOC/SignupWrapper";
import Button from "../components/UI/Button";
import InputGroup from "../components/UI/InputGroup";

const RC = () => {
  const headingText = (
    <h3 className="text-[#232164] font-semibold text-base lg:text-xl 2xl:text-3xl mb-[5px] mt-[43px] lg:mt-[87.75px] 2xl:mt-[117px]">
      Registered Company Number
    </h3>
  );

  return (
    <SignupWrapper showSecuredLogo={true} headingText={headingText}>
      <p className="text-[rgba(35,33,100,0.5)] mb-[30px] lg:mb-[61px] text-[12px] 2xl:text-base w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        We use your RC Number to verify that your business is duly registered.
      </p>
      <div className="mb-[26.25px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        <label
          htmlFor="rc"
          className="text-[13.5px] 2xl:text-lg text-colorPrimary mb-[11px]"
        >
          Enter your registered company number
        </label>
        <input
          id="rc"
          type="text"
          className="text-colorPrimary border w-full text-lg border-[#D5D8DA] 2xl:h-[46px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium"
        />
        {/* <InputGroup type="text" label="Enter your registered company number" /> */}
      </div>

      <div className="w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        <Button>Proceed to set password</Button>

        <div className="flex justify-between mt-[7px] lg:mt-[15px] 2xl:mt-[20px] mb-[58px] lg:mb-[117px] 2xl:mb-[156px]">
          <div />
          <a href="#" className="underline text-colorPrimaryDark font-medium">
            Skip
          </a>
        </div>
      </div>
    </SignupWrapper>
  );
};

export default RC;
