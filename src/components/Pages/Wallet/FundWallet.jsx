import { useEffect } from "react";

import Copy from "../../../assets/images/svg/copy.svg";

const FundWallet = (props) => {
  const { showFundWallet, fundWalletHandler } = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window) document.body.style.overflow = "hidden";
    }

    if (!showFundWallet) {
      if (typeof window !== "undefined") {
        if (window) document.body.style.overflow = "unset";
      }
    }
  }, [showFundWallet]);

  if (!showFundWallet) return <></>;

  return (
    <div
      onClick={fundWalletHandler}
      className="w-screen fixed h-screen bg-[rgba(23,23,23,0.54)] z-50 grid place-content-center left-0 top-0"
    >
      <div className="rounded-2xl text-center text-colorPrimary bg-white max-w-xs md:max-w-lg px-11 py-3">
        <p className="mt-6 mb-3 text-xl">Fund your ScamTrust Wallet</p>
        <p className="font-medium text-xl">Bank: WEMA BANK</p>
        <p className="max-w-[150px] cursor-pointer md:w-[280px] my-3 flex justify-center items-center font-medium text-sm px-4 2xl:text-2xl mx-auto bg-[#0257C0] text-white text-center py-2 rounded-md xl:rounded-[33px]">
          <img src={Copy} alt="copy" className="mr-3" />
          Number copied
        </p>
        <p className="mb-7">
          This works like a regular bank account number. Transferfrom any source
          to 7820857716. Select WEMA BANK as the destination bank. Funds will be
          credited to your ScamTrust account immediately
        </p>
        <p onClick={fundWalletHandler} className="font-semibold text-right">Done</p>
      </div>
    </div>
  );
};

export default FundWallet;
