import Logo from "../components/branding/Logo/Logo";
import SignupWrapper from "../components/HOC/SignupWrapper";
import Button from "../components/UI/Button";
import InputGroup from "../components/UI/InputGroup";

const SetPassword = () => {
  const headingText = (
    <h3 className="font-extrabold text-colorPrimary text-base md:text-lg 2xl:text-2xl pt-[42px] 2xl:mb-[152px] mb-[42px]">
      {" "}
      Let&apos;s help you secure your{" "}
      <span className="text-colorSecondary">ScamTrust</span> Vendor account.
      Kindly set your <span className="text-colorSecondary"> password</span> and{" "}
      <span className="text-colorSecondary"> transaction pin.</span>
    </h3>
  );

  return (
    <SignupWrapper headingText={headingText} showSecuredLogo={true}>
      <div className="w-[325px] mx-auto">
        <div className="mb-[10px]">
          <InputGroup
            label="Set password"
            type="password"
            infoText="Minimum of 8 characters, with uppercase, lowercase and a number."
            moreInfo={true}
          />
        </div>

        <InputGroup label="Confirm password" type="password" />

        <div className="my-[50px] 2xl:mb-[152px]">
          <Button forwardIcon={true}>Proceed to set a transaction pin</Button>
        </div>
      </div>
    </SignupWrapper>
  );
};

export default SetPassword;
