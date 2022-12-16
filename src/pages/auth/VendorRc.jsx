import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import { vendorRcShema } from "../../model/registerModel";
import ErrorInfo from "../../assets/images/svg/error-info.svg";

const VendorRc = () => {
  const headingText = (
    <h3 className=" text-center text-[#232164] font-semibold text-base lg:text-xl 2xl:text-3xl mb-[5px] mt-[43px] lg:mt-[87.75px] 2xl:mt-[117px]">
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
      <p className="text-center text-[rgba(35,33,100,0.5)] mb-[30px] lg:mb-[61px] text-[12px] 2xl:text-base w-full lg:w-[353.25px] 2xl:w-full">
        We use your RC Number to verify that your business is duly registered.
      </p>
      <form onSubmit={handleSubmit(rcHandler)}>
        <div className=" text-center  2xl:mb-10 w-full lg:w-full 2xl:w-full px-10">
          <label
            htmlFor="rc"
            className=" text-center text-[13.5px] 2xl:text-lg text-colorPrimary"
          >
            Enter your registered company number
          </label>
          <input
            id="rc"
            name="rc"
            {...register("rc")}
            type="text"
            className="text-colorPrimary border w-full text-lg border-[#D5D8DA] 2xl:h-[46px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium"
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

        <div className="w-full-px-10 my-10 text-center lg:w-full 2xl:w-full px-10" >
          <Button type="submit">Proceed to set password</Button>

          <div className="flex justify-between mt-[7px] lg:mt-[15px] 2xl:mt-[20px] mb-[58px] lg:mb-[117px] 2xl:mb-[156px]">
            <div />
            <span onClick={() => navigate("/vendor-signup-setpassword")} className="underline text-colorPrimaryDark font-medium">
              Skip
            </span>
          </div>
        </div>
      </form>
    </SignupWrapper>
  );
};

export default VendorRc;
