import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/branding/Logo/Logo";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Button from "../../components/UI/Button";
// import { registerAsync } from "../redux/Auth";

const Signup = (rcComponent) => {
  const [Name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [industry, setIndustry] = useState();
  const [industryData, setIndustryData] = useState();
  const [businessData, setBusinesData] = useState();
  const [businessType, setBusinessType] = useState();
  const [location, setLocaion] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [vendor, setVendor] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
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

  useEffect(() => {
    async function GetIndustry() {
      try {
        const API_URL =
          "https://scamtrust.herokuapp.com/api/v1/misc/list/industries";
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        //   console.log(payload);
        const request = await axios.get(API_URL, config);
        const response = request?.data;
        setIndustryData(response?.data);

        return response;
      } catch (error) {
        console.log(error.response);
      }
    }
    GetIndustry();
  }, []);

  useEffect(() => {
    async function GetBusiness() {
      try {
        const API_URL =
          "https://scamtrust.herokuapp.com/api/v1/misc/list/businesstypes";
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        //   console.log(payload);
        const request = await axios.get(API_URL, config);
        const response = request?.data;
        setBusinesData(response?.data);

        return response;
      } catch (error) {
        console.log(error.response);
      }
    }
    GetBusiness();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen font-secondary">
      {/* Left Grid Content */}
      <div className="font-secondary px-[33px] md:px-[66.75px] 2xl:px-[89px] py-[19px] md:py-[38.25px] 2xl:py-[51px] flex flex-col justify-between">
        <Logo />
        <div className="2xl:mt-[106px] mt-[25px] md:mt-[79.5px] mb-[126.75px] 2xl:mb-[169px] px-[30px] md:px-[74.25px] 2xl:px-[99px]">
          <h2 className="font-extrabold w-[200px] md:w-[393.75px] 2xl:w-[525px] text-lg 2xl:text-2xl text-colorPrimary mb-[52.75px] 2xl:mb-[70px]">
            Let&apos;s get you started with your{" "}
            <span className="text-[#3AB75D]">ScamTrust</span> Vendor account
          </h2>

          <form
            onSubmit={handleSubmit((data) => {
              handleFormSumit(data);
            })}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Business Name
                  <input
                    name="business_name"
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    {...register("businessName", {
                      required: "Business name is required",
                    })}
                    className={`border-[0.5px] w-full ${
                      rcComponent && "h-[35px]"
                    } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                  />
                  {errors.businessName && (
                    <span className="text-xs text-red-500 font-medium italic">
                      Business name is required
                    </span>
                  )}
                </label>
              </div>
              {/* <InputGroup type="text"  label="Business Name" /> */}
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Email Adress
                  <input
                    name="email"
                    type="email"
                    value={email}
                    {...register("email", {
                      required: "Email is required",
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`border-[0.5px] w-full ${
                      rcComponent && "h-[35px]"
                    } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                  />
                </label>
                {errors.email && (
                  <span className="text-xs text-red-500 font-medium italic">
                    email is required
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Phone Number
                  <input
                    name="phone-number"
                    type="number"
                    value={phone}
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                    })}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`border-[0.5px] w-full ${
                      rcComponent && "h-[35px]"
                    } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                  />
                </label>
                {errors.phoneNumber && (
                  <span className="text-xs text-red-500 font-medium italic">
                    phone number is required
                  </span>
                )}
              </div>
              <div>
                <label className=" text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
                  Industry Type
                  <select
                    {...register("industryType", {
                      required: "industry type is required",
                    })}
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
                    name="industryType"
                    id=""
                  >
                    <option value="">Select Industry Type</option>
                    {industryData?.map((industryData, idx) => {
                      return (
                        <option key={idx} value={industryData?.id}>
                          {industryData?.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                {errors.industryType && (
                  <span className="text-xs block text-red-500 font-medium italic">
                    {errors.industryType.message}
                  </span>
                )}
              </div>
            </div>
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Business Adress
                  <input
                    name="business_adress"
                    type="text"
                    value={location}
                    {...register("businessAddress", {
                      required: "Business Address is required",
                    })}
                    onChange={(e) => setLocaion(e.target.value)}
                    className={`border-[0.5px] w-full ${
                      rcComponent && "h-[35px]"
                    } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                  />
                </label>
                {errors.businessAddress && (
                  <span className="text-xs text-red-500 font-medium italic">
                    Business Address is required
                  </span>
                )}
              </div>
              <label className="text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
                Business Type
                <select
                  {...register("businessType", {
                    required: "Select a business type from the dropdown",
                  })}
                  onChange={(e) => setBusinessType(e.target.value)}
                  value={businessType}
                  className=" border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
                  name="businessType"
                >
                  <option value="">Select Business Type</option>
                  {businessData?.map((businessData) => {
                    return (
                      <>
                        {" "}
                        <option value={businessData?.id}>
                          {businessData?.name}
                        </option>
                      </>
                    );
                  })}
                </select>
                {errors.businessType && (
                  <span className="text-xs text-red-500 font-medium italic">
                    Select a business type from the dropdown
                  </span>
                )}
              </label>
            </div>

            <div className="  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Password
                  <input
                    name="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-[0.5px] w-full ${
                      rcComponent && "h-[35px]"
                    } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                  />
                </label>
                {errors.password && (
                  <span className="text-xs text-red-500 font-medium italic">
                    Password is required
                  </span>
                )}
              </div>
              <label className="  text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
                Confirm Password
                <input
                  name="confirm-password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`border-[0.5px] w-full ${
                    rcComponent && "h-[35px]"
                  } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                />
                {errors.confirmPassword && (
                  <span className="text-xs text-red-500 font-medium italic">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 mb-[11.75px] 2xl:mb-[45px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary 2xl:mb-[15px] mb-[10px]">
                  Type of Seller
                  <select
                    {...register("sellerType", {
                      required: "Select a seller type from the dropdown",
                    })}
                    onChange={(e) => setVendor(e.target.value)}
                    value={vendor}
                    className=" border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]"
                    name="sellerType"
                  >
                    <option value="">Select Seller Type</option>
                    <option value="vendor">Vendor</option>
                  </select>
                </label>
                <div>
                  {errors.sellerType && (
                    <span className="text-xs text-red-500 font-medium italic">
                      Select a seller type from the dropdown
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="2xl:mt-[20px] text-[8px] 2xl:text-[11px] mt-[15px] mb-[13px] 2xl:mb-[18px]">
              <div>
                <input
                  type="checkbox"
                  {...register("termsAndConditions", {
                    required: "You have to agree to terms of service",
                  })}
                />
                <span className="ml-[10px]">
                  I agree to{" "}
                  <span className="text-colorPrimary">Scam Trust&apos;s</span>{" "}
                  Terms of Service and Privacy Policy
                </span>
              </div>
              {errors.termsAndConditions && (
                <span className="text-[8px] text-red-500 font-medium italic">
                  {errors.termsAndConditions.message}
                </span>
              )}
            </div>

            {errorMessage.length ? (
              <span className="text-xs text-red-400 my-5 text-center ">
                {errorMessage}
              </span>
            ) : (
              ""
            )}

            <div>
              <Button type="submit">Proceed to verify Set Password</Button>
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

export default Signup;
