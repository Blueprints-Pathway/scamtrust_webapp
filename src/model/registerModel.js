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

export const CustomerSetPasswordSchema = yup.object().shape({
  password: yup
    .string("password should be a string")
    .min(8, "password should have a minimum length of 8")
    .required("password is required"),
  password_confirmation: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),
});

export const createTransactionSchema = yup.object().shape({
  vendor_id: yup
    .string("vendor id must be a string")
    .required("vendor id is required"),
  product_name: yup
    .string("product name must be a string")
    .required("product name is is required"),
  phone: yup
    .string()
    .length(11, "phone must be 11 digits long")
    .required("phone is required"),
  amount: yup.number("amount must be a number").required("amount is required"),
  quantity: yup
    .number("quantity must be a number")
    .required("quantity is required"),
  due_date: yup
    .string("due date must be a number")
    .required("due date is required"),
  description: yup
    .string("description must be a string")
    .required("description is required"),
  agree: yup.boolean().oneOf([true], "Please agree to terms and condition"),
});
