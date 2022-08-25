import * as yup from "yup";

export const vendorResgisterSchema = yup.object().shape({
  name: yup
    .string("business name is a required field")
    .required("business name is required"),
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  phone: yup
    .string("phone number should be a string")
    .required("phone number is required"),
  industry: yup
    .string("business industry should be a string")
    .required("business industry is required"),
  location: yup
    .string("business location should be a string")
    .required("business location is required"),
  business_type_id: yup
    .string("business type should be a string")
    .required("business type is required"),
  agree: yup.boolean().oneOf([true], "Please agree to terms and condition"),
});

export const vendorRcShema = yup.object().shape({
  rc: yup.string("rc is a required field").required("rc is required"),
});

export const vendorSetPasswordSchema = yup.object().shape({
  password: yup
    .string("password should be a string")
    .min(8, "password should have a minimum length of 8")
    .required("password is required"),
  password_confirmation: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),
});

export const customerRegistrationSchema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  username: yup
    .string("username should be a string")
    .required("username is required"),
  phone: yup.string().required("phone is required"),
  location: yup
    .string("location should be a string")
    .required("location is required"),
  agree: yup.boolean().oneOf([true], "Please agree to terms and condition"),
});
