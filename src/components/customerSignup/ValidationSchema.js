import * as Yup from "yup";
import Signup from "./Signup";


const {
	formField: {
		phoneNumber,
		email,
		userName,
		location,
		password,
		password_confirmation,
		fullName,
		DOB,
		bvn,
		phone,
		type,
	},
} = Signup;

export default [
	Yup.object().shape({
		[userName.name]: Yup.string().required(`${userName.requiredErrorMsg}`),
		[phoneNumber.name]: Yup.number().required(
			`${phoneNumber.requiredErrorMsg}`
		),
		[email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
		[location.name]: Yup.string()
			.nullable()
			.required(`${location.requiredErrorMsg}`),

		[bvn.name]: Yup.number().required(`${bvn.requiredErrorMsg}`),
		[DOB.name]: Yup.string().required(`${DOB.requiredErrorMsg}`),
		[phone.name]: Yup.string().nullable().required(`${phone.requiredErrorMsg}`),
		[password.name]: Yup.number().required(`${password.requiredErrorMsg}`),
		[password_confirmation.name]: Yup.string().oneOf(
			[Yup.ref("password"), null],
			"Passwords must match"
		),
		[fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
	}),
];
