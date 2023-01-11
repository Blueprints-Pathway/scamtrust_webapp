/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
const ConfirmAccount = (props) => {
	const { showConfirmAccount, setShowFundWallet, setShowConfirmAccont } = props;
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
	const toggleConfirmCopy = () => {
		setShowConfirmAccont(false);
		setShowFundWallet(true);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (window) document.body.style.overflow = "hidden";
		}

		if (!showConfirmAccount) {
			if (typeof window !== "undefined") {
				if (window) document.body.style.overflow = "unset";
			}
		}
	}, [showConfirmAccount]);

	if (!showConfirmAccount) return <></>;

	return (
		<>
			<div
				onClick={() => setShowConfirmAccont(false)}
				className="w-screen fixed h-screen bg-[rgba(23,23,23,0.54)] z-50 left-0 top-0"
			/>
			<div
				style={{ zIndex: "51" }}
				className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				<div className="rounded-2xl text-center text-colorPrimary bg-white max-w-[90%] mx-auto md:max-w-lg pt-3">
					<p className="mt-6 mb-3 px-11 text-xl">Copy or Share Number</p>
					<p className="px-11 font-medium text-[#444445E5]">
						Copy or transfer or send to your account number{" "}
						{details?.virtual_account?.account_number} to receive payment from
						anyone
					</p>
					<div className="grid grid-cols-2 border-t border-t-[#44444566] h-[40px] my-6 justify-between">
						<div
							onClick={toggleConfirmCopy}
							className="flex border-r cursor-pointer border-r-[#44444566] items-center justify-center"
						>
							<p>Copy</p>
						</div>
						<div className="flex items-center justify-center">
							<p>Share</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConfirmAccount;
