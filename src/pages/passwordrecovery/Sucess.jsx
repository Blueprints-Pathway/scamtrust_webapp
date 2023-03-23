import React from "react";
import "./password.css";
import Logo from "../../assets/images/ScanTrust logo.svg";
import { useNavigate,useLocation } from "react-router-dom";
import sucess from "../../assets/images/sucess.svg"
function Sucess() {
	const navigate = useNavigate();
	const location = useLocation();
	const email = location?.state;
	console.log(email,"email")
	const confirm = () => {
		navigate("/");
	};
	return (
		<div className="container-fluid ">
			<div className="m-5">
				<img className="px-5" alt="logo" src={Logo} />
			</div>
			<div className="mx-auto box-border  top-10 md:top-40 lg:top-40 sm:w-full lg:w-5/12   md:6/12  card p-4 border-2 mt-5 pass bottom-20  left-30 right-30 ">
				<div className="text-center ">
					<h3 className="password-recovery mt-5">Password Change Sucessful</h3>
				</div>

				<div className="text-center ">
					<span className="font-popins password-recovery-top ">
						Please check your Email Address {email}
					</span>
				</div>
				<div className="grid grid-cols-6   gap-4 p-3   ">
					<div className="col-start-2 col-span-4">
					<div className="grid justify-items-center mt-4 mb-5">
						<img src={sucess} alt="success" style={{
                           height:"170px", width:"170px"
                        }}/>
                        </div>
                        <div className=" bottom grid justify-items-center mt-5 mb-5	">
							<button
								onClick={confirm}
								style={{ backgroundColor: " #232164" }}
								className=" w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Proceed to Login
							</button>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sucess;