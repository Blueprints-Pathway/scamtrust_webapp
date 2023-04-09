/** @format */

import React, { useState, useEffect, useRef } from "react";
import "./settingsVendor.css";
import axios from "axios";
import swal from "sweetalert";
// import BankSelect from "../Pages/CustDashboard/BankSelect";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import EdithBusinessName from "./EdithBusinessName";
import EditPhone from "./EditPhone";
import EdithEmail from "./EdithEmail";
import CashAccount from "./CashAccount";
import EditAdress from "./EditAdress";
// import logo from "../../assets/images/loader-img.png";
function GeneralSettings() {



	const [values, setValues] = useState({
		businessName: "",
		phoneNumber: "",
		phoneNumber2: "",
		phoneNumber4: "",
		email: "",
		email2: "",
		email4: "",
		office: "",
		office2: "",
		account: "",
		account2: "",
		bank: "",
		bankNumber: "",
		bankName: "",
		bank2: "",
		bankNumber2: "",
		bankName2: "",
		pin1: "",
		pin2: "",
		pin3: "",
		pin4: "",
		pin5: "",
		pin6: "",
		pin7: "",
		pin8: "",
		pin9: "",
		pin10: "",
		pin11: "",
		pin12: "",
		pinCheck1: "",
		pinCheck2: "",
		pinCheck3: "",
		pinCheck4: "",
		pinCheck5: "",
		pinCheck6: "",
		pinCheck7: "",
		pinCheck8: "",
		pinCheck9: "",
		pinCheck10: "",
		pinCheck11: "",
		pinCheck12: "",
	});

	const [error, setError] = useState({
		businessName: "",
		phoneNumber: "",
		phoneNumber2: "",
		phoneNumber4: "",
		email: "",
		email2: "",
		email4: "",
		office: "",
		office2: "",
		account: "",
		account2: "",
		bank: "",
		bankNumber: "",
		bankName: "",
		bank2: "",
		bankNumber2: "",
		bankName2: "",
		pinCheckError1: "",
		pinCheckError2: "",
	});

	const [accountNumber, setAccountNumber] = useState("");
	const [accountNumberError, setAccountNumberError] = useState(false);
	const [accountName, setAccountName] = useState("");
	const [accountNameError, setAccountNameError] = useState(false);
	///phone number end///
	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		setSubmit(true);
	};

	const [submit, setSubmit] = useState(false);

	const validate = (values) => {
		const error = {};

		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const regex2 = /^[0-9]{11}$/;

		if (!values.phoneNumber) {
			error.phoneNumber = "Phone Number is required";
		} else if (!regex2.test(values.phoneNumber)) {
			error.phoneNumber = "Invalid Phone Number";
		}
		if (!values.phoneNumber2) {
			error.phoneNumber2 = "Please Answer security the question";
		}
		if (!values.phoneNumber4) {
			error.phoneNumber4 = "Please enter new phone number";
		} else if (!regex2.test(values.phoneNumber4)) {
			error.phoneNumber4 = "Invalid Phone Number";
		}
		if (!values.email) {
			error.email = "Email is required";
		} else if (!regex.test(values.email)) {
			error.email = "Invalid email";
		}
		if (!values.email2) {
			error.email2 = "Please Answer security the question";
		}
		if (!values.email4) {
			error.email4 = "Please enter new email";
		} else if (!regex.test(values.email4)) {
			error.email4 = "Invalid email";
		}
		if (!values.office) {
			error.office = "office address is required";
		}
		if (!values.office2) {
			error.office2 = "Please Answer security the question";
		}
		if (!values.account) {
			error.account = "Active cashout account is required";
		}
		if (!values.account2) {
			error.account2 = "Active cashout account is required";
		}
		if (!values.businessName) {
			error.businessName = "Business name is required";
		}
		if (!values.businessName2) {
			error.businessName2 = "Please Answer security the question";
		}
		if (!values.bank) {
			error.bank = "Bank is required";
		}
		if (!values.bankNumber) {
			error.bankNumber = "Bank number is required";
		}
		if (!values.bankName) {
			error.bankName = "Bank name is required";
		}
		if (!values.bank2) {
			error.bank2 = "Bank is required";
		}
		if (!values.bankNumber2) {
			error.bankNumber2 = "Bank number is required";
		}
		if (!values.bankName2) {
			error.bankName2 = "Bank name is required";
		}
		if (
			!values.pin1 ||
			!values.pin2 ||
			!values.pin3 ||
			!values.pin4 ||
			!values.pin5 ||
			!values.pin6
		) {
			error.pinCheckError1 = "All field must be filled";
		}
		if (
			!values.pin7 ||
			!values.pin8 ||
			!values.pin9 ||
			!values.pin10 ||
			!values.pin11 ||
			!values.pin12
		) {
			error.pinCheckError2 = "All field must be filled";
		}

		return error;
	};

	const handleEdit = () => {
		setEdit(!Edit);
	};
	const [Edit, setEdit] = useState(false);



	const handleClosed2 = () => {
		setClosed2(!closed2);
	};
	const [closed2, setClosed2] = useState(false);

	const handleClosed3 = () => {
		setClosed3(!closed3);
	};
	const [closed3, setClosed3] = useState(false);

	const handleClosed4 = () => {
		setClosed4(!closed4);
	};
	const [closed4, setClosed4] = useState(false);

	const handleClosed11 = () => {
		setClosed11(!closed11);
	};
	const [closed11, setClosed11] = useState(false);

	const handleClosed12 = () => {
		setClosed12(!closed12);
		setClosed11(true);
		setClosed22(true);
	};
	const [closed12, setClosed12] = useState(false);

	const handleClosed13 = () => {
		setClosed13(!closed13);
		setClosed11(true);
	};
	const [closed13, setClosed13] = useState(false);

	const handleClosed14 = () => {
		setClosed14(!closed14);
		setClosed21(true);
		setClosed18(true);
		setClosed2(true);
	};
	const [closed14, setClosed14] = useState(false);

	const [closed18, setClosed18] = useState(false);

	const handleClosed19 = () => {
		setClosed19(!closed19);
		setClosed3(true);
	};
	const [closed19, setClosed19] = useState(false);

	const handleClosed20 = () => {
		setClosed20(!closed20);
		setClosed19(true);
		setClosed3(true);
	};
	const [closed20, setClosed20] = useState(false);

	const handleClosed21 = () => {
		setClosed21(!closed21);
		setClosed18(true);
		setClosed2(true);
	};
	const [closed21, setClosed21] = useState(false);

	const handleClosed22 = () => {
		setClosed22(!closed22);
		setClosed11(true);
	};
	const [closed22, setClosed22] = useState(false);

	const handleClosed23 = () => {
		setClosed23(!closed23);
		setClosed13(true);
		setClosed11(true);
	};
	const [closed23, setClosed23] = useState(false);

	const handleClosed24 = () => {
		setClosed24(!closed24);
		setClosed22(true);
		setClosed12(true);
		setClosed11(true);
	};
	const [closed24, setClosed24] = useState(false);

	const handleClosed25 = () => {
		setClosed25(!closed25);
		setClosed23(true);
		setClosed13(true);
		setClosed11(true);
	};
	const [closed25, setClosed25] = useState(false);

	const handleEdit1 = () => {
		setEdit1(!Edit1);
		
	};
	const [Edit1, setEdit1] = useState(false);
	const handleEdit7 = () => {
		setEdit7(!Edit7);
		// setClosed7(false);
	};
	const [Edit7, setEdit7] = useState(false);
	const handleEdit2 = () => {
		setEdit2(!Edit2);
		setClosed2(false);
	};
	const [Edit2, setEdit2] = useState(false);

	const handleEdit3 = () => {
		setEdit3(!Edit3);
		setClosed3(false);
	};
	const [Edit3, setEdit3] = useState(false);

	const handleEdit4 = () => {
		setEdit4(!Edit4);
		setClosed4(false);
	};
	const [Edit4, setEdit4] = useState(false);

	// const handleEdit10 = () => {
	// 	setEdit10(!Edit10);
	// 	setClosed12(false);
	// };
	const [Edit10, setEdit10] = useState(false);

	const handleEdit11 = () => {
		setEdit11(!Edit11);
		setClosed11(false);
	};
	const [Edit11, setEdit11] = useState(false);

	// const handleEdit12 = () => {
	// 	setEdit12(!Edit12);
	// 	setClosed13(false);
	// };
	// const [Edit12, setEdit12] = useState(false);

	// const handleEdit13 = () => {
	// 	setEdit13(!Edit13);
	// 	setClosed14(false);
	// };
	// const [Edit13, setEdit13] = useState(false);

	// const handleEdit16 = () => {
	// 	setEdit16(!Edit16);
	// 	setClosed17(false);
	// };
	// const [Edit16, setEdit16] = useState(false);

	// const handleEdit17 = () => {
	// 	setEdit17(!Edit17);
	// 	setClosed18(false);
	// };
	// const [Edit17, setEdit17] = useState(false);

	// const handleEdit18 = () => {
	// 	setEdit18(!Edit18);
	// 	setClosed19(false);
	// };
	const [Edit18, setEdit18] = useState(false);

	const handleEdit19 = () => {
		setEdit19(!Edit19);
		setClosed20(false);
	};
	const [Edit19, setEdit19] = useState(false);

	const handleEdit20 = () => {
		setEdit20(!Edit20);
		setClosed21(false);
	};
	const [Edit20, setEdit20] = useState(false);

	const handleEdit21 = () => {
		setEdit21(!Edit21);
		setClosed22(false);
	};
	const [Edit21, setEdit21] = useState(false);

	const handleEdit22 = () => {
		setEdit22(!Edit22);
		setClosed23(false);
	};
	const [Edit22, setEdit22] = useState(false);

	const handleEdit23 = () => {
		setEdit23(!Edit23);
		setClosed24(false);
	};
	const [Edit23, setEdit23] = useState(false);

	const handleEdit24 = () => {
		setEdit24(!Edit24);
		setClosed25(false);
	};
	const [Edit24, setEdit24] = useState(false);

	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		setError(validate(values));
	};
	const user = JSON.parse(localStorage?.getItem("dataKey"));
	console.log(user, "user datas");

	const { data } = useSelector((state) => state.user);
	
	const auth = useSelector((state) => state.auth);
	console.log(auth, "hello");
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="vendorAction" onClick={handleEdit}>
					{Edit ? (
						""
					) : (
						<p>
							Edit <FontAwesomeIcon icon={faPen} className="pen" />
						</p>
					)}
				</div>

				<div className="w-full  inputBox-GeneralSettings flex">
					<label className="flex form-text-GeneralSettings">
						{data?.data?.usertype === "CUSTOMER"? "UserName" : "Business names"}
					</label>

					<input
						onChange={handleChange}
						value={data?.data?.name || data?.data?.username}
						className="nowinput"
						name="businessName"
						type="text"
						placeholder=""
						autoComplete="off"
						disabled
					/>
					{Edit ? (
						<span>
							<span onClick={handleEdit1} className="edit1 ml-10">
								Edit
							</span>
						</span>
					) : (
						""
					)}
				</div>

				<div className=" flex w-full input-field inputBox-GeneralSettings">
					<label className="flex form-text-GeneralSettings">Phone Number</label>

					<input
						onChange={handleChange}
						value={data?.data?.phone}
						className="nowinput"
						name="phoneNumber"
						placeholder=""
						type="text"
						autoComplete="off"
						inputMode="numeric"
						maxLength="11"
						disabled
					/>
					{Edit ? (
						<span className="edit2 ml-10" onClick={handleEdit2}>
							Edit
						</span>
					) : (
						""
					)}
				</div>

				<div className=" w-full inputBox-GeneralSettings flex">
					<label className="form-text-GeneralSettings flex ">
						Emails Address
					</label>

					<input
						onChange={handleChange}
						value={data?.data?.email}
						className="nowinput"
						name="email"
						placeholder=""
						type="text"
						autoComplete="off"
						disabled
					/>
					{Edit ? (
						<span className="edit3 ml-10" onClick={handleEdit3}>
							Edit
						</span>
					) : (
						""
					)}
				</div>

				{data?.data?.usertype === "CUSTOMER" ? (
					""
				) : (
					<div className="flex w-full inputBox-GeneralSettings">
						<label className="flex form-text-GeneralSettings">
							Ofiice Address
						</label>

						<input
							onChange={handleChange}
							value={data?.data?.location}
							className="nowinput"
							name="userName"
							type="text"
							placeholder=""
							autoComplete="off"
							disabled
						/>
						{Edit ? (
							<span className="edit4 ml-10" onClick={handleEdit4}>
								Edit
							</span>
						) : (
							""
						)}
					</div>
				)}

				<div className="inputBox-GeneralSettings flex">
					<label className=" flex form-text-GeneralSettings">
						Active cashout account
					</label>
					<input
						onChange={handleChange}
						// handleEmail
						value={data?.data?.bankAccounts
							?.account_number}
						className=""
						name="account"
						type="text"
						placeholder=""
						autoComplete="off"
						disabled
					/>
					{Edit ? (
						<span className="edit5 " onClick={handleEdit11}>
							Add
						</span>
					) : (
						""
					)}
				</div>
			</form>
			{/* edit company name */}
			{Edit1 && <EdithBusinessName closeModal={setEdit1} />}
			{Edit2 && <EditPhone closeModal={setEdit2} />}
			{Edit3 && <EdithEmail closeModal={setEdit3} />}
			{Edit11 && <CashAccount closeModal={setEdit11} />}
			{Edit4 && <EditAdress  closeModal={setEdit4}/>  }
		</div>
	);
}

export default GeneralSettings;
