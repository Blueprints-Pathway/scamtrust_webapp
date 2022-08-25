import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Ellipse from "../../../assets/images/svg/ellipse.svg";
import Ellipse2 from "../../../assets/images/svg/ellipse2.svg";

const SignupSelectionModal = (props) => {
  const { showSignupModal, setShowSignupModal } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window) document.body.style.overflow = "hidden";
    }

    if (!showSignupModal) {
      if (typeof window !== "undefined") {
        if (window) document.body.style.overflow = "unset";
      }
    }
  }, [showSignupModal]);

  if (!showSignupModal) return <></>;

  return (
    <div>
      <div
        onClick={() => setShowSignupModal(false)}
        style={{ zIndex: "51" }}
        className="fixed top-0 left-0 w-screen h-screen bg-[rgba(23,23,23,.70)]"
      />
      <div
        style={{ zIndex: "52" }}
        className="fixed text-center text-colorPrimary rounded-3xl p-4 md:p-6 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className="text-white font-semibold text-[18px] lg:text-[46px]">
          Welcome to ScamTrust <span className="ml-6">👋</span>{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-around w-full mt-4 lg:mt-[53px]">
          <div
            onClick={() => navigate("/vendor-signup")}
            className="lg:w-[473px] lg:mr-11 lg:mb-0 mb-5 mx-auto w-[250px] h-[260px] overflow-hidden cursor-pointer rounded-3xl lg:h-[483px]"
          >
            <div className="transition-all duration-500 hover:scale-110 w-full h-full relative bg-[#F5F6FA]">
              <img
                src={Ellipse}
                alt="rounded_shape"
                className="absolute top-[20%] left-0"
              />
              <img
                src={Ellipse2}
                alt="rounded_shape"
                className="absolute top-0 left-0"
              />
              <div className="absolute text-left top-[60%] -translate-y-[60$] px-[20px]">
                <p className="font-bold text-[28px]">Vendor</p>
                <p className="text-sm lg:text-xl">
                  Get a risk-free payment for almost any product or service.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/customer-signup")}
            className="lg:w-[473px] mx-auto w-[250px] h-[260px] overflow-hidden cursor-pointer rounded-3xl lg:h-[483px]"
          >
            <div className="transition-all duration-500 hover:scale-110 w-full h-full relative bg-[#F5F6FA]">
              <img
                src={Ellipse}
                alt="rounded_shape"
                className="absolute top-[20%] left-0"
              />
              <img
                src={Ellipse2}
                alt="rounded_shape"
                className="absolute top-0 left-0"
              />
              <div className="absolute text-left top-[60%] -translate-y-[60$] px-[20px]">
                <p className="font-bold text-[28px]">Customer</p>
                <p className="text-sm lg:text-xl">
                  Verify and enjoy transaction transparency before product
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSelectionModal;
