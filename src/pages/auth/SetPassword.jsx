import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import InputGroup from "../../components/UI/InputGroup";
import Eye from "../../assets/images/svg/eye.svg";

const SetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSumit = async (data) => {
    setErrorMessage("");
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Password's do not match");
      return;
    }
    localStorage.setItem("scam-trust-form1", JSON.stringify(data));
    navigate("/signup/set-password");
  };

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
      <form
        className="w-[325px] mx-auto"
        onSubmit={handleSubmit((data) => {
          handleFormSumit(data);
        })}
      >
        <div className="mb-[10px]">
          <div className="relative">
            <div>
              <input
                type={passwordVisible ? "password" : "text"}
                id="password"
                {...register("password", {
                  required: "password is required",
                })}
                name="password"
                className={`border-[0.5px] w-full ${
                  "rcComponent" && "h-[35px]"
                } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
              {errors.password && (
                <span className="text-xs text-red-500 font-medium italic">
                  password is required
                </span>
              )}
            </div>
            <img
              src={Eye}
              {...register("confirmPassword", {
                required: "confirm password is required",
              })}
              onClick={() => setPasswordVisible((prevState) => !prevState)}
              alt="view"
              className="absolute right-[17px] cursor-pointer top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="relative">
          <input
            type={passwordVisible ? "password" : "text"}
            id="confirmPassword"
            className={`border-[0.5px] w-full ${
              "rcComponent" && "h-[35px]"
            } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
          />
          <img
            src={Eye}
            onClick={() => setPasswordVisible((prevState) => !prevState)}
            alt="view"
            className="absolute right-[17px] cursor-pointer top-1/2 -translate-y-1/2"
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-500 font-medium italic">
              Confirm password is required
            </span>
          )}
        </div>

        <div className="my-[50px] 2xl:mb-[152px]">
          <Button forwardIcon={true}>Proceed to set a transaction pin</Button>
        </div>
      </form>
    </SignupWrapper>
  );
};

export default SetPassword;
