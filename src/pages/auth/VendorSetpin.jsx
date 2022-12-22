import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";

const inputClassName =
  "h-[30px] w-[30px] focus:border-[#D5D8DA] focus:outline-none text-center rounded text-colorPrimary text-xl border-[#D5D8DA] border-[1px] bg-[#fff]";

const VendorSetpin = () => {
  const navigate = useNavigate();

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const fifthInput = useRef();
  const sixthInput = useRef();
  const seventhInput = useRef();
  const eigthInput = useRef();

  const handleSubmit = () => {
    navigate("/vendor-signup-security-question");
  };

  const headingText = (
    <h3 className="font-extrabold text-lg 2xl:text-2xl 2xl:mb-[100px] mb-[75px] px-8 mx-8 mt-8 pt-5 text-[#262466]">
      {" "}
      Let&apos;s help you secure your{" "}
      <span className="text-colorSecondary">ScamTrust</span> Vendor account.
      Kindly set your <span className="text-colorSecondary"> password</span> and{" "}
      <span className="text-colorSecondary"> transaction pin.</span>
    </h3>
  );

  //   Pushing the input to the next field
  const handleInputChange = (event) => {
    const { maxLength, value, name } = event.target;
    switch (name) {
      case "input1":
        if (value.length >= maxLength) {
          secondInput.current?.focus();
        }
        break;
      case "input2":
        if (value.length >= maxLength) {
          thirdInput.current?.focus();
        }
        break;
      case "input3":
        if (value.length >= maxLength) {
          fourthInput.current?.focus();
        }
        break;
      case "input4":
        if (value.length >= maxLength) {
          fifthInput.current?.focus();
        }
        break;
      case "input5":
        if (value.length >= maxLength) {
          sixthInput.current?.focus();
        }
        break;
      case "input6":
        if (value.length >= maxLength) {
          seventhInput.current?.focus();
        }
        break;
      case "input7":
        if (value.length >= maxLength) {
          eigthInput.current?.focus();
        }
        break;
      case "input8":
        if (value.length >= maxLength) {
          eigthInput.current?.focus();
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-12">
    <SignupWrapper headingText={headingText} showSecuredLogo={true}>
      <div className="w-[248.25px] 2xl:w-[331px] mx-auto">
        <p className="text-center text-[#7D8287] text-[11px]">
          To set up your pin, input your 4-digit code and confirm it below.
        </p>

        <div className="mb-[20px] mt-3">
          <p className="text-base font-medium pb-2 flex px-10">Transaction pin</p>
          <div className="mb-[1.46rem] flex justify-between mx-10">
            <input
              maxLength={1}
              ref={firstInput}
              name="input1"
              onChange={handleInputChange}
              className={inputClassName}
            />
            <input
              maxLength={1}
              ref={secondInput}
              name="input2"
              onChange={handleInputChange}
              className={inputClassName}
            />
            <input
              maxLength={1}
              ref={thirdInput}
              name="input3"
              onChange={handleInputChange}
              className={inputClassName}
            />
            <input
              maxLength={1}
              ref={fourthInput}
              name="input4"
              onChange={handleInputChange}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="mb-[20px]">
          <p className="text-base font-medium pb-2 flex px-10">Confirm transaction pin</p>
          <div className="mb-[1.46rem] flex justify-between mx-10">
            <input
              maxLength={1}
              ref={fifthInput}
              name="input5"
              onChange={handleInputChange}
              className={inputClassName}
            />
            <input
              maxLength={1}
              ref={sixthInput}
              name="input6"
              onChange={handleInputChange}
              className={inputClassName}
            />
            <input
              maxLength={1}
              ref={seventhInput}
              name="input7"
              onChange={handleInputChange}
              className={inputClassName}
            />
            <input
              maxLength={1}
              ref={eigthInput}
              name="input8"
              onChange={handleInputChange}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="2xl:mt-[40px] mb-[105px] 2xl:mb-[140px] mt-[30px]">
          <Button onClick={handleSubmit} forwardIcon={true}>
            Set security question
          </Button>
        </div>
      </div>
    </SignupWrapper>
    </div>
  );
};

export default VendorSetpin;
