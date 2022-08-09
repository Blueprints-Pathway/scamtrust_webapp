import SecuredBy from "../../assets/images/svg/secured-by.svg";

import InputGroup from "../UI/InputGroup";

const InitiateTransaction = (props) => {
  const { setShowInitiateTransaction, setShowTransactionPreview } = props;

  const onCloseTransactionClicked = () => {
    setShowInitiateTransaction((prevState) => !prevState);
  };

  const onContinueClicked = () => {
    setShowInitiateTransaction(false);
    setShowTransactionPreview(true)
  };

  return (
    <div className="absolute ml-[25px] w-[280px] bg-white rounded-[20px] top-1/2 left-1/2 lg:w-[900px] 2xl:w-[1097px] lg:p-8 p-4 2xl:p-16 -translate-x-1/2 -translate-y-1/2 z-30">
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

      <div className="grid grid-cols-2 gap-14 px-14 mt-10">
        <InputGroup label="Vendor ID" placeHolder="Vendor ID" />
        <InputGroup label="Product name" placeHolder="Product name" />
      </div>
      <div className="grid grid-cols-2 gap-14 px-14 mt-10">
        <InputGroup label="Phone number" placeHolder="Phone number" />
        <InputGroup label=" Due date" placeHolder=" Due date" />
      </div>
      <div className="grid grid-cols-2 gap-14 px-14 mt-10">
        <InputGroup label="Product amount" placeHolder="Product amount" />
        <InputGroup label="Quantity" placeHolder="Quantity" />
      </div>
      <div className="grid grid-cols-1 px-14 mt-10">
        <textarea
          name=""
          placeholder="Describe the product"
          id=""
          cols="100"
          rows="2"
          className="px-3 py-4 placeholder:text-xs border border-[#02489F]"
        />
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
            onClick={onContinueClicked}
            className="bg-colorPrimary text-white rounded-md font-semibold px-[50px] py-[10px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitiateTransaction;
