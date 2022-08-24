import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ErrorInfo from "../../assets/images/svg/error-info.svg";
import Logo from "../../components/branding/Logo/Logo";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Button from "../../components/UI/Button";
import {
  fetchBusinessIndustries,
  fetchBusinessTypes,
} from "../../services/registerForm";
import { vendorResgisterSchema } from "../../model/registerModel";

const formGroup =
  "grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[24px] 2xl:mb-[45px]";
const formInput =
  "border-[0.5px] w-full h-[35px] border-[#D5D8DA] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium";
const formLabel =
  "text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]";
const formSelect =
  "border-[0.5px] focus:outline-none h-[35px] 2xl:h-[40px] w-full border-[#D5D8DA] 2xl:text-base text-[12px] rounded-[5px]";

const VendorSignup = () => {
  const [businessIndustries, setBusinessIndustries] = useState(null);
  const [businessTypes, setBusinessTypes] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendorResgisterSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await fetchBusinessTypes();
      setBusinessTypes(result.data);
    })();
    (async () => {
      const result = await fetchBusinessIndustries();
      setBusinessIndustries(result.data);
    })();
  }, []);

  const VendorSignupHandler = async (data) => {
    localStorage.setItem("vendor-signup", JSON.stringify(data));
    navigate("/vendor-signup-rc");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen font-secondary">
      {/* Left Grid Content */}
      <div className="font-secondary px-[10px] md:px-[66.75px] 2xl:px-[89px] py-[19px] md:py-[38.25px] 2xl:py-[51px] flex flex-col justify-between">
        <Logo />

        <div className="2xl:mt-[106px] mt-[25px] md:mt-[79.5px] mb-[126.75px] 2xl:mb-[169px] px-[30px] md:px-[74.25px] 2xl:px-[99px]">
          <h2 className="font-extrabold w-[200px] md:w-[393.75px] 2xl:w-[525px] text-lg 2xl:text-2xl text-colorPrimary mb-[52.75px] 2xl:mb-[70px]">
            Let&apos;s get you started with your{" "}
            <span className="text-[#3AB75D]">ScamTrust</span> Vendor account
          </h2>

          <form onSubmit={handleSubmit(VendorSignupHandler)}>
            <div className={formGroup}>
              <div>
                <label className={formLabel}>Business Name </label>
                <input
                  name="name"
                  type="text"
                  {...register("name")}
                  className={formInput}
                />
                {errors.name ? (
                  <span className="flex items-center mt-2">
                    <img src={ErrorInfo} className="mr-2" alt="error_info" />
                    <span className="text-[#FC0D1B]">
                      {errors.name.message}
                    </span>
                  </span>
                ) : (
                  <></>
                )}
              </div>

              <div>
                <label className={formLabel}>Email Address </label>
                <input
                  {...register("email")}
                  name="email"
                  className={formInput}
                />
                {errors.email ? (
                  <span className="flex items-center mt-2">
                    <img src={ErrorInfo} className="mr-2" alt="error_info" />
                    <span className="text-[#FC0D1B]">
                      {errors.email.message}
                    </span>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className={formGroup}>
              <div>
                <label className={formLabel}>Phone Number</label>
                <input
                  {...register("phone")}
                  name="phone"
                  type="string"
                  className={formInput}
                />
                {errors.phone ? (
                  <span className="flex items-center mt-2">
                    <img src={ErrorInfo} className="mr-2" alt="error_info" />
                    <span className="text-[#FC0D1B]">
                      {errors.phone.message}
                    </span>
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <label className={formLabel}>Business Industry </label>
                <select
                  {...register("industry")}
                  className={formSelect}
                  name="industry"
                >
                  <option value="">Select Business Industry</option>
                  {businessIndustries?.map((industry) => {
                    return (
                      <option value={industry?.id}>{industry?.name}</option>
                    );
                  })}
                </select>
                {errors.industry ? (
                  <span className="flex items-center mt-2">
                    <img src={ErrorInfo} className="mr-2" alt="error_info" />
                    <span className="text-[#FC0D1B]">
                      {errors.industry.message}
                    </span>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className={formGroup}>
              <div>
                <label className={formLabel}>Business Address</label>
                <input
                  name="location"
                  type="text"
                  {...register("location")}
                  className={formInput}
                />
                {errors.location ? (
                  <span className="flex items-center mt-2">
                    <img src={ErrorInfo} className="mr-2" alt="error_info" />
                    <span className="text-[#FC0D1B]">
                      {errors.location.message}
                    </span>
                  </span>
                ) : (
                  <></>
                )}
              </div>

              <div>
                <label className={formLabel}>Business Type </label>
                <select
                  {...register("business_type_id")}
                  className={formSelect}
                  name="business_type_id"
                >
                  <option value="">Select Business Type</option>
                  {businessTypes?.map((businessType) => {
                    return (
                      <option value={businessType?.id}>
                        {businessType?.name}
                      </option>
                    );
                  })}
                </select>
                {errors.business_type_id ? (
                  <span className="flex items-center mt-2">
                    <img src={ErrorInfo} className="mr-2" alt="error_info" />
                    <span className="text-[#FC0D1B]">
                      {errors.business_type_id.message}
                    </span>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div
              className={
                "2xl:mt-[20px] text-xs 2xl:text-[11px] mt-[15px] mb-[13px] 2xl:mb-[18px]"
              }
            >
              <input name="agree" type="checkbox" {...register("agree")} />
              <span className="ml-[10px]">
                I agree to{" "}
                <span className="text-colorPrimary">Scam Trust&apos;s</span>{" "}
                Terms of Service and Privacy Policy
              </span>
              {errors.agree ? (
                <span className="flex items-center mt-2">
                  <img src={ErrorInfo} className="mr-2" alt="error_info" />
                  <span className="text-[#FC0D1B]">{errors.agree.message}</span>
                </span>
              ) : (
                <></>
              )}
            </div>

            <div>
              <Button type="submit">Proceed to verify RC Number</Button>
            </div>
          </form>
        </div>
        <div className="flex justify-between 2xl:text-base text-[12px]">
          <div />
          <a className="text-colorPrimary underline" href="#">
            Go back to Website
          </a>
        </div>
      </div>

      {/* Right Grid Content */}
      <div className="bg-[#F9F9F9] relative lg:block hidden">
        <CustomerTestimony />
      </div>
    </div>
  );
};

export default VendorSignup;
