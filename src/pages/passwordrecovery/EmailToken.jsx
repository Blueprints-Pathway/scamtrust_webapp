/** @format */
import Mail from "../../assets/images/mail.svg";
import Logo from "../../assets/images/ScanTrust logo.svg";


/** @format */

import React, { useState } from "react";
import "./password.css";
// import Logo from "../images/ScanTrust logo.svg";
// import Mail from "../images/mail.svg";
import InputCode from "./Token";
import { useNavigate, useLocation } from "react-router-dom";
function EmailToken() {
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState([...Array(6)].map(() => ""));
	const navigate = useNavigate();
	const location = useLocation();
	const email = location?.state;

	const token = () => {
		navigate("/confirmpassword", { state: getData });
	};
	const newData = code.toString();

	const getData = parseFloat(newData.replace(/,/g, ""));
	
	return (
		<div className="container-fluid ">
			<div className="m-5">
				<img className="px-5" alt="logo" src={Logo} />
			</div>
			<div className="mx-auto box-border  sm:w-full lg:w-5/12   md:6/12  card p-4 border-2 pass  top-10 left-50 right-30 ">
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
						<div className="mt-3 grid justify-items-center text-black  ">
							<span>Enter Code</span>
						</div>
						<div className="grid  p-3  justify-items-center">
							<InputCode
								length={6}
								code={code}
								setCode={setCode}
								label="Code Label"
								loading={loading}
								onComplete={(code) => {
									setLoading(true);
									setTimeout(() => setLoading(false), 10000);
								}}
							/>
						</div>
                       
						<div className="grid justify-items-center mt-4	">
							<button
								onClick={token}
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

export default EmailToken;
