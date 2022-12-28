import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import { vendorRcShema } from "../../model/registerModel";
import ErrorInfo from "../../assets/images/svg/error-info.svg";

const VendorRc = () => {
  const headingText = (
    <h3 className="text-[#232164] font-bold text-base lg:text-[18px] 2xl:text-3xl mb-[8px] mt-[43px] lg:mt-[87.75px] 2xl:mt-[117px] px-[80px] lg:px-[59px]">
      Registered Company Number
    </h3>
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendorRcShema),
  });

  const navigate = useNavigate();

  const rcHandler = (data) => {
    const vendorSignupDetails = JSON.parse(
      localStorage.getItem("vendor-signup")
    );
    const vendorSignupData = { ...vendorSignupDetails, ...data };
    localStorage.setItem("vendor-signup", JSON.stringify(vendorSignupData));
    navigate("/vendor-signup-setpassword")
  };

  return (
    <SignupWrapper showSecuredLogo={true} headingText={headingText}>
      <div className="flex justify-start mx-[60px]">
      <p className="text-[rgba(35,33,100,0.5)] mb-[20px] lg:mb-[50px] text-[12px] 2xl:text-base w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        We use your RC Number to verify that your business is duly registered.
      </p>
      </div>
      <form onSubmit={handleSubmit(rcHandler)} className="flex flex-col items-center">
        <div className="mb-[26.25px] 2xl:mb-[35px] w-[280px] lg:w-[400.25px] 2xl:w-[471px]">
          <label
            htmlFor="rc"
            className=" text-center font-normal text-[13.5px] 2xl:text-lg text-colorPrimary"
          >
            Enter your registered company number
          </label>
          <input
            id="rc"
            name="rc"
            {...register("rc")}
            type="text"
            className="text-colorPrimary border-[1px] my-1 rounded-md w-full text-lg border-[#D5D8DA] 2xl:h-[46px] focus:outline-none px-[0px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium"
          />
          {errors.rc ? (
            <span className="flex items-center mt-2">
              <img src={ErrorInfo} className="mr-2" alt="error_info" />
              <span className="text-[#FC0D1B]">{errors.rc.message}</span>
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="py-0 w-[200px] text-center lg:w-[400.25px] 2xl:w-full" >
          <Button type="submit">Proceed to set password</Button>

          <div className="flex justify-between mt-[7px] lg:mt-[15px] 2xl:mt-[20px] mb-[58px] lg:mb-[100px] 2xl:mb-[156px]">
            <div />
            <span onClick={() => navigate("/vendor-signup-setpassword")}
             className="underline cursor-pointer text-colorPrimaryDark text-base mt-4 font-medium">
              Skip
            </span>
          </div>
        </div>
      </form>
    </SignupWrapper>
  );
};

export default VendorRc;
