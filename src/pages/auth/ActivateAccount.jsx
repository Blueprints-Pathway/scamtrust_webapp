import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../components/branding/Logo/Logo";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Tick from "../../assets/images/tick.svg";
import { useEffect } from "react";

const ActivateAccount = () => {
  const navigate = useNavigate();
 
  const vendorSignupDetails = JSON.parse(
    localStorage.getItem("vendor-signup")
  );

  console.log(vendorSignupDetails, "vendor details");
   const email = localStorage.getItem("user-email");
  
   const mail = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen font-secondary">
      {/* Left Grid Content */}
      <div className="font-secondary px-[33px] md:px-[66.75px] 2xl:px-[89px] py-[19px] md:py-[38.25px] 2xl:py-[51px] flex flex-col justify-between">
        <Logo />

        <div className="2xl:w-[330.63px] w-[170px] h-[165px] 2xl:h-[351px] mt-[60px] 2xl:mt-[178px] mb-[40px] 2xl:mb-[129px] mx-auto">
          <img src={Tick} alt="success" className="w-fit h-fit" />
        </div>

        <div className="2xl:max-w-[564px] max-w-[450px] mx-auto">
          <p className="font-medium text-base lg:text-lg 2xl:text-2xl text-colorPrimary mb-[42px]">
            Congrats! We have sent a confirmation link to{" "}
            <span className="text-colorSecondary">{email}</span>{" "}
            Kindly click to activate Your ScamTrust account
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-colorPrimary justify-center flex items-center px-[10px] w-full rounded-[5px] py-2 text-white text-[13px] 2xl:text-lg"
          >
            Check Mail
          </button>
        </div>
      </div>

      {/* Right Grid Content */}
      <div className="bg-[#F9F9F9] relative lg:block hidden">
        <CustomerTestimony />
      </div>
    </div>
  );
};

export default ActivateAccount;
