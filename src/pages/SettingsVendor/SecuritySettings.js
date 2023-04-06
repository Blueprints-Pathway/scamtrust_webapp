/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./settingsVendor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Eye from "../../assets/images/";
import {
	faCircleExclamation,
	faEyeSlash,
	faEye,
	faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import encrypted from "../../assets/images/encrypted.png";
import swal from "sweetalert";
import EdithPassword from "./EdithPassword";
import EditPin from "./EditPin";
function SecuritySettings() {
	const [values, setValues] = useState({
		// phoneNumber3: "",
		previousPassword: "",
		password: "",
		passwordCheck: "",
	});
	const [failed, setFailed] = useState();
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [passwordVisibility1, setPasswordVisibility1] = useState(false);
	const [passwordVisibility2, setPasswordVisibility2] = useState(false);
	const [password, setPassword] = useState();
	const [error, setError] = useState({
		phoneNumber3: "",
		email3: "",
		password: "",
		passwordCheck: "",
	});
	const [pins, setPins] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [Errors, setErrors] = useState(true);
	const togglePasswordVisibility = () => {
		setPasswordVisibility((prevState) => !prevState);
	};
	const togglePasswordVisibility1 = () => {
		setPasswordVisibility1((prevState) => !prevState);
	};
	const togglePasswordVisibility2 = () => {
		setPasswordVisibility2((prevState) => !prevState);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		setSubmit(true);
	};
	const [submit, setSubmit] = useState(false);

	const validate = (values) => {
		const error = {};

		const regexPassword =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		if (!values.password) {
			error.password = "Password is required";
		} else if (!regexPassword.test(values.password)) {
			error.password =
				" Must contain a Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character";
		}
		if (!values.passwordCheck) {
			error.passwordCheck = "Confirm password is required";
		} else if (values.passwordCheck !== values.password) {
			error.passwordCheck = "Password must match";
		}
		if (!values.phoneNumber3) {
			error.phoneNumber3 = "Please enter a transaction pin";
		}
		if (!values.email3) {
			error.email3 = "Please Answer security the question";
		}
		return error;
	};

	const handleClosed5 = () => {
		setClosed5(!closed5);
	};
	const [closed5, setClosed5] = useState(false);

	const handleClosed6 = () => {
		setClosed6(!closed6);
	};
	const [closed6, setClosed6] = useState(false);

	const handleClosed7 = () => {
		setClosed7(!closed7);
	};
	const [closed7, setClosed7] = useState(false);

	const handleClosed15 = () => {
		setClosed15(!closed15);
		setClosed6(true);
	};
	const [closed15, setClosed15] = useState(false);

	const handleClosed16 = () => {
		setClosed16(!closed16);
		setClosed7(true);
		setClosed5(true);
	};
	const [closed16, setClosed16] = useState(false);

	const handleEdit5 = () => {
		setEdit5(!Edit5);
		setClosed5(false);
	};
	const [Edit5, setEdit5] = useState(false);

	const handleEdit6 = () => {
		setEdit6(!Edit6);
		setClosed6(false);
	};
	const [Edit6, setEdit6] = useState(false);

	const handleEdit7 = () => {
		setEdit7(!Edit7);
		setClosed7(false);
	};
	const [Edit7, setEdit7] = useState(false);

	const handleEdit14 = () => {
		setEdit14(!Edit14);
		setClosed15(false);
	};
	const [Edit14, setEdit14] = useState(false);

	const handleEdit15 = () => {
		setEdit15(!Edit15);
		setClosed16(false);
	};
	const [Edit15, setEdit15] = useState(false);

	const [submitted, setSubmitted] = useState(false);

	// const handleCheck2 = () => {
	// 	setChecked2(!checked2);
	// };
	const [checked2, setChecked2] = useState(false);

	const handleCheck3 = () => {
		setChecked3(!checked3);
	};
	const [checked3, setChecked3] = useState(false);

	const handleCheck4 = () => {
		setChecked4(!checked4);
	};
	const [checked4, setChecked4] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		setError(validate(values));
		setErrors(error.All === true ? true : false);
	};

	const handleInput = () => {
		setInput(!Input);
	};
	const [Input, setInput] = useState(false);

	useEffect(() => {
		if (Object.keys(error).length === 0 && submitted);
	}, [error]);
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));

	

	return (
		<div className="grid  gap-8 mt-10 ">
			<div className="md:flex  justify-between  grid md:mx-0 mx-5">
				<div>
					<label className="">Password</label>
				</div>
				<div>
					<label>********</label>
				</div>

				<button
					className=" md:ml-0 p-2 rounded-lg bg-[#3AB75D] w-18 md:w-32 lg:w-48 "
					onClick={handleEdit6}
				>
					Change password
				</button>
			</div>

			<div className="md:flex  justify-between  grid md:mx-0 mx-5">
				<label>Transaction pin</label>
				<label >********</label>
				<button
					className=" md:ml-0 p-2 rounded-lg bg-[#3AB75D] w-18 md:w-32 lg:w-48 "
					onClick={handleEdit5}
				>
					Change Pin
				</button>
	
			</div>
			{Edit6 && <EdithPassword closeModal={setEdit6} />}
			{Edit5 && <EditPin closeModal={setEdit5} />}
		</div>
	);
}

export default SecuritySettings;
