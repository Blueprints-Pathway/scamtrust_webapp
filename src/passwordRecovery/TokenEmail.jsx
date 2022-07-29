import React, { useState, useRef } from "react";
import "./password.css";
import Logo from "../images/ScanTrust logo.svg";
import Mail from "../images/mail.svg";
// import InputCode from "./Token";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
function TokenEmail(onComplete, length) {
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState();
	const navigate = useNavigate();
	const inputs = useRef([]);
	const location = useLocation();
	const [code, setCode] = useState([...Array(6)].map(() => ""));
	const email = location.state;
	// const token = () => {
	// 	navigate("/confirmPassword");
	// };

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
		navigate("/confirmpassword", { state: code });
	};
	return (
		<div className="container-fluid ">
			<div className="m-5">
				<img className="px-5" alt="logo" src={Logo} />
			</div>
			<div className="mx-auto box-border  sm:w-full lg:w-5/12   md:6/12  card p-4 border-2 mt-5 password  top-10 left-50 right-30 relative">
				<div className="text-center ">
					<h3 className="password-recovery">Password Recovery</h3>
				</div>

				<div className="text-center ">
					<span className="font-popins password-recovery-top ">
						Please enter the 6 digit code sent to {email}
					</span>
				</div>
				<div className="grid grid-cols-6   gap-4 p-3  ">
					<div className="col-start-2 col-span-4">
						<div className="grid justify-items-center mt-4">
							<img
								alt="mail"
								style={{
									maxHeight: "200px",
									maxWidth: "120px",
								}}
								src={Mail}
							/>
						</div>
						<div className="mt-3 grid justify-items-center ">
							<span>Enter Code</span>
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
						<div className="grid justify-items-center mt-4	">
							<button
								type="submit"
								onClick={updateToken}
								style={{ backgroundColor: " #232164" }}
								className=" w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Confirm
							</button>
						</div>
						<div className="text-center mt-5 grid justify-items-center bottom mb-5">
							<small className="secured">
								secured by{" "}
								<span className="login">
									<img
										alt="logo"
										style={{
											width: "50px",
											height: "20px",
											display: "inline",
										}}
										src={Logo}
									/>
								</span>{" "}
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TokenEmail;
