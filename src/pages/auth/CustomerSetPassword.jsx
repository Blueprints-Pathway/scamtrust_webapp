import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import Eye from "../../assets/images/svg/eye.svg";
import ErrorInfo from "../../assets/images/svg/error-info.svg";
import { CustomerSetPasswordSchema } from "../../model/registerModel";

const CustomerSetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CustomerSetPasswordSchema) });

  const handleFormSumit = (data) => {
    const customerSignupDetails = JSON.parse(
      localStorage.getItem("customer-signup")
    );
    const customerSignupData = { ...customerSignupDetails, ...data };
    localStorage.setItem("customer-signup", JSON.stringify(customerSignupData));
    navigate("/customer-signup-setpin");
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
        onSubmit={handleSubmit(handleFormSumit)}
      >
        <div className="mb-[10px]">
          <div className="relative">
            <div>
              <input
                type={!passwordVisible ? "password" : "text"}
                id="password"
                {...register("password")}
                name="password"
                placeholder="password"
                className={`border-[0.5px] text-black w-full  border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            <img
              src={Eye}
              onClick={() => setPasswordVisible((prevState) => !prevState)}
              alt="view"
              className="absolute right-[17px] cursor-pointer top-1/2 -translate-y-1/2"
            />
          </div>
          {errors.password ? (
            <span className="flex text-xs items-center mt-2">
              <img src={ErrorInfo} className="mr-2" alt="error_info" />
              <span className="text-[#FC0D1B]">{errors.password.message}</span>
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="relative">
          <div>
            <input
              type={!passwordVisible ? "password" : "text"}
              {...register("password_confirmation")}
              id="confirmPassword"
              name="password_confirmation"
              placeholder="Confirm Password"
              className={`border-[0.5px] w-full border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
            />
            <img
              src={Eye}
              onClick={() => setPasswordVisible((prevState) => !prevState)}
              alt="view"
              className="absolute right-[17px] cursor-pointer top-1/2 -translate-y-1/2"
            />
          </div>
          {errors.password_confirmation ? (
            <span className="flex text-xs items-center mt-2">
              <img src={ErrorInfo} className="mr-2" alt="error_info" />
              <span className="text-[#FC0D1B]">
                {errors.password_confirmation.message}
              </span>
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="my-[50px] 2xl:mb-[152px]">
          <Button forwardIcon={true}>Proceed to set a transaction pin</Button>
        </div>
      </form>
    </SignupWrapper>
  );
};

export default CustomerSetPassword;
