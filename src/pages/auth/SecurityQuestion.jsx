import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import SecurityCard from "../../assets/images/security-card.svg";
import SelectGroup from "../../components/UI/SelectGroup";
import InputGroup from "../../components/UI/InputGroup";

const SecurityQuestion = () => {
  const headingText = (
    <div className="flex justify-between items-center mb-[15px] mt-[43px] lg:mt-[87.75px] 2xl:mb-[42px] 2xl:mt-[117px]">
      <h3 className="text-[#232164] font-semibold text-base lg:text-xl 2xl:text-3xl">
        Security Question
      </h3>

      <img src={SecurityCard} alt="security card" />
    </div>
  );

  return (
    <SignupWrapper headingText={headingText}>
      <p className="text-[rgba(35,33,100,0.5)] mb-[30px] lg:mb-[61px] text-[12px] 2xl:text-base w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        Security questions add an extra layer of security to your account; It is
        to verify if the account really belongs to you.
      </p>
      <div className="mb-[15px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        <SelectGroup
          label="Security Question"
          option="Choose a security question"
        />
      </div>
      <div className="mb-[26.25px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        <InputGroup label="Your Answer" type="text" />
      </div>

      <div className="w-[280px] lg:w-[353.25px] 2xl:w-[471px] mb-[58px] lg:mb-[117px] 2xl:mb-[156px]">
        <Button bgColor="bg-colorSecondary">Continue</Button>
      </div>
    </SignupWrapper>
  );
};

export default SecurityQuestion;
