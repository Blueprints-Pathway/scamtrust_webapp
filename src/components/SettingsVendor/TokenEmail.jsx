import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./token.css";
function TokenEmail(onComplete, length) {
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState();
	// const navigate = useNavigate();
	const inputs = useRef([]);
	// const location = useLocation();
	// const state = location?.state?.data;
	const [code, setCode] = useState([...Array(6)].map(() => ""));

	const newToken = code.toString();
	const withoutCommas = newToken?.replace(/,/g, "");
	// console.log(withoutCommas, "hello");
	///token start//

	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
	const changeToken = async (e) => {
		e.preventDefault();
		try {
			const API_URL = `https://scamtrust.herokuapp.com/api/v1/settings/verify/change/email/token
			`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
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
			// setEmail(data?.data?.data);
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

	const updateToken = (e) => {
		e.preventDefault();
		// navigate("/confirmpassword", { state: code });
	};
	return (
		<div className="container-fluid ">
			<div className="mx-auto box-border  sm:w-full lg:w-full md:6/12 mt-5   top-10 left-50 right-10 relative">
				<div className=" ">
					<div className="col-start-2 col-span-4">
						<div className="mt-3 grid justify-items-center ">
							<span className="text-xl">
								Enter OTP sent to your new email address
							</span>
						</div>
						<div className="grid  p-3  justify-items-center">
							<div className="code-input grid  p-3  container-fluid">
								<div className="code-inputs mt-5">
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
						<span className="text-small  ">
							Didn’t receive OTP? <Link to="">Resend OTP</Link>
						</span>
						<div className="grid justify-items-center mt-4	">
							<button
								type="submit"
								onClick={changeToken}
								style={{ backgroundColor: " #232164" }}
								className=" w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
