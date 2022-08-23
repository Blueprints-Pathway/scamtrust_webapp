import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import ArrowDown from "../../../assets/images/svg/arrow-down.svg";

const confirmPinSchema = yup.object().shape({
  pin: yup.string().required("Pin is a required field"),
});

const ConfirmTransactionPin = (props) => {
  const {
    confirmTransactionPin,
    setIsWithdrawing,
    setConfirmWithdraw,
    setConfirmTransactionPin,
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(confirmPinSchema),
  });

  const navigate = useNavigate();

  const closeWithdraw = () => {
    navigate("/customer-dashboard");
    setIsWithdrawing(false);
  };

  const onContinueClicked = (data) => {
    console.log(data);
    setConfirmWithdraw(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window) document.body.style.overflow = "hidden";
    }

    if (!confirmTransactionPin) {
      if (typeof window !== "undefined") {
        if (window) document.body.style.overflow = "unset";
      }
    }
  }, [confirmTransactionPin]);

  if (!confirmTransactionPin) return <></>;

  return (
    <div>
      <div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
      <form
        onSubmit={handleSubmit(onContinueClicked)}
        className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white"
      >
        <div className="flex justify-between items-center md:mb-16 border-b pb-3 border-b-[#EAEAEA]">
          <p className="font-semibold text-xl md:text-[30px]">Withdrawal</p>
          <p
            onClick={() => setConfirmTransactionPin(false)}
            className="font-extrabold cursor-pointer text-lg md:text-[25px]"
          >
            Close x
          </p>
        </div>

        <p className="text-2xl my-11 text-[#444445]">
          Please enter transaction pin to proceed.
        </p>

        <div className="mb-11 md:mb-16">
          <label className="text-xl md:text-3xl block" htmlFor="amount">
            Transaction pin
          </label>
          <input
            {...register("pin")}
            type="string"
            placeholder="Enter transaction pin"
            className={`block placeholder:text-[#E5E7E9] ${
              errors.pin ? "border-b-red-600" : ""
            } focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]`}
          />
          {errors.pin && <p className="text-red-600">{errors.pin.message}</p>}
        </div>

        <div className="flex justify-between items-center">
          <img src={SecuredBy} alt="SecuredByScamTrust" />
          <button
            type="submit"
            className="bg-colorPrimary text-white px-7 py-3 rounded-md"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmTransactionPin;
