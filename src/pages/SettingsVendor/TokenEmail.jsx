import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./token.css";
import { useSelector } from 'react-redux';
function TokenEmail({onComplete, length,closeModal}) {
	const [loading, setLoading] = useState(false);
	
	
	const inputs = useRef([]);
	
	const [code, setCode] = useState([...Array(6)].map(() => ""));

	const newToken = code.toString();
	const withoutCommas = newToken?.replace(/,/g, "");


	const auth = useSelector((state) => state?.auth?.data?.access_token);
	const changeToken = async (e) => {
		
		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/verify/change/email/token
			`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth}`,
				},
			};
			const payload = {
				token: withoutCommas,
			};
			swal({
				icon: "success",
				text: "Email changed successfully",
			});
			const data = await axios.post(API_URL, payload, config);	
			//console.log(data,"email data");
			closeModal(false);

		} catch (error) {
			
			swal({
				icon: "error",
				text: "Invalid token provided",
			});
		}
	};
	///token end//
	const onKeyUp = (e, slot) => {
		if (e.keyCode === 8 && !code[slot] && slot !== 0) {
			const newCode = [...code];
			newCode[slot - 1] = "";
			setCode(newCode);
			inputs.current[slot - 1].focus();
		}
	};
	const processInput = (e, slot) => {
		const num = e.target.value;
		if (/[^0-9]/.test(num)) return;
		const newCode = [...code];
		newCode[slot] = num;
		setCode(newCode);
		if (slot !== length - 1) {
			inputs.current[slot + 1].focus();
		}
		if (newCode.every((num) => num !== "")) {
			onComplete(newCode.join(""));
		}
	};

	
	return (
		<div className=" ">
			<div className="mx-auto box-border sm:w-full lg:w-full md:6/12    top-10 left-50 right-10 relative">
				<div className="flex">
					<div className="col-start-2 col-span-4">
						<div className="flex -mt-12   text-center">
							<span className="md:text-xl text-sm text-center flex">
								Enter OTP sent to your new Email Adress
							</span>
						</div>
						<div className="grid md:p-3 p-1  justify-items-center">
							<div className="code-input grid md:p-3 p-1  container-fluid">
								<div className="code-inputs mt-3">
									{code.map((num, idx) => {
										return (
											<input
												key={idx}
												type="text"
												inputMode="numeric"
												maxLength={1}
												value={num}
												autoFocus={!code[0].length && idx === 0}
												readOnly={loading}
												onChange={(e) => processInput(e, idx)}
												onKeyUp={(e) => onKeyUp(e, idx)}
												ref={(ref) => inputs.current.push(ref)}
											/>
										);
									})}
								</div>
							</div>
						</div>
						<div className="flex">
							<span className="text-small text-center  ">
								Didn’t receive OTP? <Link to="">Resend OTP</Link>
							</span>
						</div>

						<div className="grid justify-items-center mb-2 mt-4	">
							<button
								type="submit"
								onClick={() => {
									changeToken();
								}}
								style={{ backgroundColor: " #232164" }}
								className=" w-full hover:bg-blue-700 text-white font-bold py-2  px-4 rounded"
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default TokenEmail;
