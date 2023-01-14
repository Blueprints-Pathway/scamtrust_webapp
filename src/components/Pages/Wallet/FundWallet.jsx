import { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Copy from "../../../assets/images/svg/copy.svg";

const FundWallet = (props) => {
  const { showFundWallet, fundWalletHandler } = props;
  const [numberCopied, setNumberCopied] = useState(false);
  const [details, setDetails] = useState();
  const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	useEffect(() => {
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/user/getdetails`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				// console.log(data?.data.data, "user data");
				setDetails(data?.data?.data);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
  const copyNumberHandler = async () => {
    navigator.clipboard
      .writeText("7820857716")
      .then(() => setNumberCopied(true));
  };

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
    <>
      <div
        onClick={fundWalletHandler}
        className="w-screen fixed h-screen bg-[rgba(23,23,23,0.54)] z-50 left-0 top-0"
      />
      <div
        style={{ zIndex: "51" }}
        className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-2xl text-center text-colorPrimary bg-white max-w-[90%] mx-auto md:max-w-lg px-11 py-3">
          <p className="mt-6 mb-3 text-xl">Fund your ScamTrust Wallet</p>
          <p className="font-medium text-xl">Bank: {details?.virtual_account?.bank_name } Bank</p>
          <p
            onClick={() => copyNumberHandler()}
            className="max-w-[190px] cursor-pointer md:w-[280px] my-3 flex justify-center items-center font-medium text-sm px-4 2xl:text-2xl mx-auto bg-[#0257C0] text-white text-center py-2 rounded-md xl:rounded-[33px]"
          >
          
              <img src={Copy} alt="copy" className="mr-3" />
              {details?.virtual_account?.account_number}
          </p>
          <p className="mb-7">
            This works like a regular bank account number. Transferfrom any
            source to {details?.virtual_account?.account_number}. Select {details?.virtual_account?.bank_name }BANK as the destination bank.
            Funds will be credited to your ScamTrust account immediately
          </p>
          {numberCopied ? (
            <p
              onClick={fundWalletHandler}
              className="cursor-pointer font-semibold text-right"
            >
              Done
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default FundWallet;
