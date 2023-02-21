import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import Encrypted from "../../../assets/images/svg/encrypted.svg";

function Success({ setDisplay, setShow, setIsWithdrawing,amount, selectedBank }) {
	const navigate = useNavigate();
	const dashboard = () => {
		navigate("/wallet");
	};
	return (
		<div>
			<div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
			<div className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white">
				<div className="flex justify-between items-center md:mb-16 border-b pb-3 border-b-[#EAEAEA]">
					<p className="font-semibold text-xl md:text-[30px]">
						Withdrawal details
					</p>
					<p
						onClick={() => {
							setDisplay(false);
							setShow(false);
							setIsWithdrawing(setIsWithdrawing);
						}}
						className="font-extrabold cursor-pointer text-lg md:text-[25px]"
					>
						Close x
					</p>
				</div>

				<p className="font-bold text-2xl">Hello Chukwudi 👋🏽</p>

				<p className="my-12 text-xl text-center">Withdrawal Successful</p>

				<img
					src={Encrypted}
					alt="successful"
					className="w-[127px] mx-auto mb-6"
				/>

				<h5 className="text-center font-bold text-2xl">₦{amount}</h5>

				<p className="text-center max-w-[300px] mx-auto text-2xl md:max-w-[410px]">
					has been successfuly sent to your {selectedBank} account
				</p>

				<div className="flex mt-16 justify-between items-center">
					<img src={SecuredBy} alt="SecuredByScamTrust" />
					<button
						onClick={() => dashboard()}
						// onClick={setDisplay(false)}
						className="bg-colorPrimary text-white px-7 py-3 rounded-md"
					>
						Done
					</button>
				</div>
			</div>
		</div>
	);
}

export default Success;
