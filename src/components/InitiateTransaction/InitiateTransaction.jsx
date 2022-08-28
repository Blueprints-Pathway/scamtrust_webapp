import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import SecuredBy from "../../assets/images/svg/secured-by.svg";
import { createTransactionSchema } from "../../model/registerModel";

const InitiateTransaction = (props) => {
  const { setShowInitiateTransaction, setShowTransactionPreview } = props;

  const [vendorId, setVendorId] = useState("");
  const [productName, setProductName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [stateFromLocalStorage, setStateFromLocalStorage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTransactionSchema)
  });

  const onCloseTransactionClicked = () => {
    setShowInitiateTransaction((prevState) => !prevState);
  };

  const onContinueClicked = () => {
    setShowInitiateTransaction(false);
    setShowTransactionPreview(true);
  };

  const handleFormSumit = (data) => {
    console.log(data);
    localStorage.setItem("scam-trust-txnInitiation", JSON.stringify(data));
    onContinueClicked();
  };

  useEffect(() => {
    const transactionDetails = JSON.parse(
      localStorage.getItem("scam-trust-txnInitiation")
    );
    console.log(transactionDetails, "transactionDetails");
    if (transactionDetails) {
      setStateFromLocalStorage(true);
      setVendorId(transactionDetails.vendor_id);
      setProductName(transactionDetails.product_name);
      setPhoneNumber(transactionDetails.phone);
      setDueDate(transactionDetails.due_date);
      setProductAmount(transactionDetails.amount);
      setProductQuantity(transactionDetails.quantity);
      setProductDescription(transactionDetails.description);
    }
  }, []);

  return (
    <div className="">
      <form
        onSubmit={handleSubmit((data) => {
          handleFormSumit(data);
        })}
        className="absolute w-[90%] mx-auto bg-white rounded-[20px] top-1/2 left-1/2 lg:w-[900px] 2xl:w-[1097px] lg:p-8 p-4 2xl:p-16 -translate-x-1/2 -translate-y-1/2 z-30"
      >
        <div className="flex items-center border-b-[2px] justify-between border-b-[#EAEAEA]">
          <h3 className="text-colorPrimary font-medium text-lg lg:font-semibold lg:text-3xl">
            Initiate transaction
          </h3>{" "}
          <div
            className="font-extrabold text-xs lg:font-[25px] cursor-pointer"
            onClick={onCloseTransactionClicked}
          >
            Close x
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 md:px-14 mt-10">
          <div className="flex flex-col">
            <div className="flex items-center">
              <label
                className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
                htmlFor="Vendor ID"
              >
                Vendor ID
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                defaultValue={vendorId}
                name="vendor_id"
                placeholder="Vendor ID"
                {...register("vendor_id", {
                  required: "Vendor ID is required",
                  value: vendorId,
                })}
                className={`${
                  errors.vendor_id && "border-red-400"
                } w-full border-[0.5px] w-fullborder-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            {errors.vendor_id && (
              <span className="text-xs text-red-500 font-medium mt-2 italic">
                {errors.vendor_id.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <label
                className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
                htmlFor="Product name"
              >
                Product name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="product_name"
                placeholder="Product name"
                {...register("product_name", {
                  required: "Product name is required",
                  value: productName,
                })}
                className={`${
                  errors.product_name && "border-red-400"
                } w-full border-[0.5px] w-fullborder-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            {errors.product_name && (
              <span className="text-xs text-red-500 font-medium mt-2 italic">
                {errors.product_name.message}
              </span>
            )}
          </div>
        </div>

        {/* PHONE NUMBER AND DATE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 md:px-14 mt-10">
          <div className="flex flex-col">
            <div className="flex items-center">
              <label
                className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
                htmlFor="Phone number"
              >
                Phone number
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  value: phoneNumber,
                })}
                className={`${
                  errors.phone && "border-red-400"
                } w-full border-[0.5px] w-fullborder-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            {errors.phone && (
              <span className="text-xs text-red-500 font-medium mt-2 italic">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <label
                className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
                htmlFor="Due date"
              >
                Due date
              </label>
            </div>
            <div className="relative">
              <input
                type="date"
                name="due_date"
                placeholder="Due date"
                {...register("due_date", {
                  required: "Due date is required",
                  value: dueDate,
                })}
                className={`${
                  errors.due_date && "border-red-400"
                } w-full border-[0.5px] w-fullborder-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            {errors.due_date && (
              <span className="text-xs text-red-500 font-medium mt-2 italic">
                {errors.due_date.message}
              </span>
            )}
          </div>
        </div>

        {/* PRODUCT AMOUNT AND QUANTITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 md:px-14 mt-10">
          <div className="flex flex-col">
            <div className="flex items-center">
              <label
                className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
                htmlFor="Product amount"
              >
                Product amount
              </label>
            </div>
            <div className="relative">
              <input
                name="amount"
                placeholder="Product amount"
                {...register("amount", {
                  required: "Product amount is required",
                  value: productAmount,
                })}
                className={`${
                  errors.amount && "border-red-400"
                } w-full border-[0.5px] w-fullborder-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            {errors.amount && (
              <span className="text-xs text-red-500 font-medium mt-2 italic">
                {errors.amount.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <label
                className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
                htmlFor="Quantity"
              >
                Quantity
              </label>
            </div>
            <div className="relative">
              <input
                name="quantity"
                placeholder="Quantity"
                {...register("quantity", {
                  required: "Quantity is required",
                  value: productQuantity,
                })}
                className={`${
                  errors.quantity && "border-red-400"
                } w-full border-[0.5px] w-fullborder-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
              />
            </div>
            {errors.quantity && (
              <span className="text-xs text-red-500 font-medium mt-2 italic">
                {errors.quantity.message}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 px-4 md:px-14 mt-10">
          <textarea
            name="description"
            placeholder="Describe the product"
            cols="100"
            {...register("description", {
              required: "Please describe the product",
              value: productDescription,
            })}
            rows="2"
            className="px-3 py-4 placeholder:text-xs border border-[#02489F]"
          />
          {errors.description && (
            <span className="text-xs text-red-500 font-medium mt-2 italic">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="flex justify-between px-14 mt-9">
          <div />
          <div className="flex items-center">
            <img
              src={SecuredBy}
              alt="secured_by_scam_trust"
              className="w-[169px] mr-6"
            />
            <button
              type="submit"
              className="bg-colorPrimary text-white rounded-md font-semibold px-[50px] py-[10px]"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InitiateTransaction;
