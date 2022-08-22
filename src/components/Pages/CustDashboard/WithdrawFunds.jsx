import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import ArrowDown from "../../../assets/images/svg/arrow-down.svg";

const WithdrawFunds = (props) => {
  const { startWithdrawFunds, setIsWithdrawing, setConfirmTransactionPin } =
    props;

  const navigate = useNavigate();

  const closeWithdraw = () => {
    navigate("/customer-dashboard");
    setIsWithdrawing(false);
  };

  const onContinueClicked = () => {
    closeWithdraw();
    setConfirmTransactionPin(true);
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
      <div className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white">
        <div className="flex border-b pb-3 border-b-[#EAEAEA] justify-between items-center mb-11 md:mb-16">
          <p className="font-semibold text-xl md:text-[30px]">Withdrawal</p>
          <p
            onClick={closeWithdraw}
            className="font-extrabold cursor-pointer text-lg md:text-[25px]"
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

        <div className="mb-32 md:mb-40 relative">
          <label className="text-xl md:text-3xl block" htmlFor="amount">
            Destination account
          </label>
          <input
            type="number"
            placeholder="Choose destination account"
            className="block placeholder:text-[#E5E7E9] focus:outline-none w-full p-2 pr-16 border-b border-b-[#C0C0C0]"
          />
          <img
            src={ArrowDown}
            alt="arrow_down"
            className="absolute right-[20px] top-[70%] -translate-y-1/2"
          />
          <div className="absolute w-[167px] p-4 border rounded-lg bg-red-50 md:bottom-[-140px] bottom-[-100px] bg-gradient-to-r from-[#023A81F0] to-[#024CA7F0] right-0">
            <div className="flex mb-2 items-center bg-red-50 p-1 rounded-xl">
              <input type="checkbox" />
              <div className="flex text-[8px] md:text-base ml-2 flex-col">
                <p>Zenith Bank</p>
                <p className="text-[#7D8287CC]">0155678890</p>
              </div>
            </div>
            <div className="flex items-center bg-red-50 p-1 rounded-xl">
              <input type="checkbox" />
              <div className="flex text-[8px] md:text-base ml-2 flex-col">
                <p>First City Monument Bank</p>
                <p className="text-[#7D8287CC]">4058090355</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <img src={SecuredBy} alt="SecuredByScamTrust" />
          <button
            onClick={onContinueClicked}
            className="bg-colorPrimary text-white px-7 py-3 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;
