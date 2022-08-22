import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SecuredBy from "../../../assets/images/svg/secured-by.svg";

const WithdrawFunds = (props) => {
  const { startWithdrawFunds, setIsWithdrawing } = props;

  const navigate = useNavigate();

  const closeWithdraw = () => {
    navigate("/customer-dashboard");
    setIsWithdrawing(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window) document.body.style.overflow = "hidden";
    }

    if (!startWithdrawFunds) {
      if (typeof window !== "undefined") {
        if (window) document.body.style.overflow = "unset";
      }
    }
  }, [startWithdrawFunds]);

  if (!startWithdrawFunds) return <></>;

  return (
    <div>
      <div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
      <div className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] mx-auto bg-white">
        <div className="flex justify-between items-center mb-11 md:mb-16">
          <p className="font-semibold text-xl md:text-[30px]">Withdrawal</p>
          <p
            onClick={closeWithdraw}
            className="font-extrabold text-lg md:text-[25px]"
          >
            Close x
          </p>
        </div>

        <div className="mb-11 md:mb-16">
          <label className="text-xl md:text-3xl block" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="block placeholder:text-[#E5E7E9] focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]"
          />
        </div>

        <div className="mb-11 md:mb-16">
          <label className="text-xl md:text-3xl block" htmlFor="amount">
            Destination account
          </label>
          <input
            type="number"
            placeholder="Choose destination account"
            className="block placeholder:text-[#E5E7E9] focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]"
          />
        </div>

        <div className="flex justify-between items-center">
          <img src={SecuredBy} alt="SecuredByScamTrust" />
          <button className="bg-colorPrimary text-white px-7 py-3 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;
