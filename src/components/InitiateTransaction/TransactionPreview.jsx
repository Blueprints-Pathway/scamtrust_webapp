import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import SecuredBy from "../../assets/images/svg/secured-by.svg";
import { createTransaction } from "../../services/transactions";

const TransactionPreview = (props) => {
  const {
    setShowTransactionPreview,
    setShowTransactionSuccess,
    setShowInitiateTransaction,
  } = props;

  const [sendingTransaction, setSendingTransaction] = useState(false);

  const state = useSelector((state) => state);
  const token = state.auth.user.data.access_token;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onConfirmClicked = async (data) => {
    const transactionData = JSON.parse(
      localStorage.getItem("scam-trust-txnInitiation")
    );
    try {
      setSendingTransaction(true);
      const result = await createTransaction(
        JSON.stringify(transactionData),
        token
      );
      if (result.status === false) {
        alert(result.message);
        return;
      }
      setSendingTransaction(false);
      setShowTransactionPreview(false);
      setShowTransactionSuccess(true);
    } catch (error) {
      setSendingTransaction(false);
      console.log(error.message);
    }
  };

  const transactionDetails = JSON.parse(
    localStorage.getItem("scam-trust-txnInitiation")
  );

  return (
    <div className="h-[90vh] md:grid md:place-content-center py-4 relative overflow-y-scroll w-full">
      <div className="w-[90%] mx-auto bg-white rounded-[20px] lg:w-[900px] 2xl:w-[1097px] lg:p-8 p-4 2xl:p-16">
        <div className="flex items-center border-b-[2px] justify-between border-b-[#EAEAEA]">
          <h3 className="text-colorPrimary font-medium text-lg lg:font-semibold lg:text-3xl">
            Transaction summary
          </h3>{" "}
          <div
            className="font-extrabold text-xs lg:font-[25px] cursor-pointer"
            onClick={() => {
              setShowTransactionPreview(false);
              setShowInitiateTransaction(true);
            }}
          >
            Edit form
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-[25px]">
          <div className="w-[250px] mx-auto p-5 bg-[#F8F8FA] lg:w-[630px]">
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p>Vendor ID</p>
              <p className="text-[#7D8287]">{transactionDetails.vendor_id}</p>
            </div>
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p>Product name</p>
              <p className="text-[#7D8287]">
                {transactionDetails.product_name}
              </p>
            </div>
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p>Product amount</p>
              <p className="text-[#7D8287]">{transactionDetails.amount}</p>
            </div>
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p>Phone number</p>
              <p className="text-[#7D8287]">{transactionDetails.phone}</p>
            </div>
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p>Transaction cost</p>
              <p className="text-[#7D8287]">₦{300}</p>
            </div>
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p> Due date</p>
              <p className="text-[#7D8287]"> {transactionDetails.due_date}</p>
            </div>
            <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
              <p>Quantity</p>
              <p className="text-[#7D8287]">{transactionDetails.quantity}</p>
            </div>
            <div className="border-b mb-4 pb-4 flex flex-col justify-between border-b-[#02479D]">
              <p className="mb-2">Description</p>
              <p className="text-[#7D8287]">{transactionDetails.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg">Total</p>
              <div className="rounded-tl-2xl rounded-br-2xl bg-gradient-to-tr py-[15px] px-[30px] text-white inline-block from-colorPrimary to-[#0257C0B0]">
                ₦ {transactionDetails.amount}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end w-[320px]">
            <div />
            <form
              onSubmit={handleSubmit((data) => {
                onConfirmClicked(data);
              })}
              className="text-center p-5"
            >
              <div>
                <input
                  type="checkbox"
                  name="terms_conditions"
                  {...register("tandc", {
                    required:
                      "To continue, you've to agree to terms and conditions",
                  })}
                />
                <span className="text-[#7D8287] ml-[6px] font-light text-sm">
                  Terms & conditions{" "}
                  <span className="text-colorPrimary">Read here</span>
                </span>
              </div>
              {errors.tandc && (
                <span className="text-[8px] text-red-500 font-medium mt-2 italic">
                  {errors.tandc.message}
                </span>
              )}
              <button
                disabled={sendingTransaction}
                type="submit"
                className="px-[31px] my-[27px] rounded-md py-[11px] text-colorPrimary bg-[#2321644F]"
              >
                {sendingTransaction ? "Loading..." : "Confirm"}
              </button>
              <img
                src={SecuredBy}
                alt="secured_by"
                className="w-[169] mx-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPreview;
