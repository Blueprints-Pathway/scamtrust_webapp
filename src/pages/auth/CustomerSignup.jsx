import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import ErrorInfo from "../../assets/images/svg/error-info.svg";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Logo from "../../components/branding/Logo/Logo";
import { customerRegistrationSchema } from "../../model/registerModel";

const signupDetailsFromStorage = localStorage.getItem("customer-signup");

const signupDetails = signupDetailsFromStorage
  ? JSON.parse(signupDetailsFromStorage)
  : null;

const defaultValues = signupDetails
  ? {
      email: signupDetails.email,
      username: signupDetails.username,
      phone: signupDetails.phone,
      location: signupDetails.location,
    }
  : null;

const CustomerSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {},
    resolver: yupResolver(customerRegistrationSchema),
  });

  const navigate = useNavigate();

  const customerSignupHandler = (data) => {
    const type = "customer";
    localStorage.setItem("customer-signup", JSON.stringify({ ...data, type }));
    navigate("/customer-signup-setpassword");
  };

  return (
    <div className="grid bg-white grid-cols-1 lg:grid-cols-2 w-full font-secondary">
      {/* Left Grid Content */}
      <div className="font-secondary px-[10px] md:px-[66.75px] 2xl:px-[89px] py-[19px] md:py-[38.25px] 2xl:py-[51px] flex flex-col justify-between">
        <Logo />
        <div className="2xl:mt-[106px] mt-[25px] md:mt-[79.5px] mb-[126.75px] 2xl:mb-[169px] px-[30px] md:px-[74.25px] 2xl:px-[99px]">
          <h2 className="font-extrabold w-[200px] md:w-[393.75px] 2xl:w-[525px] text-lg 2xl:text-2xl text-colorPrimary mb-[52.75px] 2xl:mb-[70px]">
            Let&apos;s get you started with your{" "}
            <span className="text-colorSecondary">ScamTrust</span> Customer
            account
          </h2>
          <form onSubmit={handleSubmit(customerSignupHandler)}>
            <div className="flex flex-col mb-6">
              <label className="font-medium text-lg">Email address</label>
              <input
                name="email"
                {...register("email")}
                className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
              />
              {errors.email ? (
                <span className="flex items-center mt-2">
                  <img src={ErrorInfo} className="mr-2" alt="error_info" />
                  <span className="text-[#FC0D1B]">{errors.email.message}</span>
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="font-medium text-lg">Username</label>
              <input
                {...register("username")}
                className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
              />
              {errors.username ? (
                <span className="flex items-center mt-2">
                  <img src={ErrorInfo} className="mr-2" alt="error_info" />
                  <span className="text-[#FC0D1B]">
                    {errors.username.message}
                  </span>
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="font-medium text-lg">Phone number</label>
              <input
                {...register("phone")}
                className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
              />
              {errors.phone ? (
                <span className="flex items-center mt-2">
                  <img src={ErrorInfo} className="mr-2" alt="error_info" />
                  <span className="text-[#FC0D1B]">{errors.phone.message}</span>
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="font-medium text-lg">Location</label>
              <input
                {...register("location")}
                className="h-[48px] border border-[#D5D8DA] rounded-md px-3 focus:outline-none"
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
            <div
              className={
                "2xl:mt-[20px] text-xs 2xl:text-[11px] mt-[15px] mb-[13px] 2xl:mb-[18px]"
              }
            >
              <input {...register("agree")} name="agree" type="checkbox" />
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
            <button
              className={`${
                Object.keys(errors).length ? "bg-[#D5D8DA]" : "bg-colorPrimary"
              } justify-center flex items-center px-[10px] w-full rounded-[5px] py-2 text-white text-[13px] 2xl:text-lg`}
            >
              Proceed to set password
            </button>
          </form>
        </div>
      </div>

      {/* Right Grid Content */}
      <div className="bg-[#F9F9F9] relative lg:block hidden">
        <CustomerTestimony />
      </div>
    </div>
  );
};

export default CustomerSignup;
