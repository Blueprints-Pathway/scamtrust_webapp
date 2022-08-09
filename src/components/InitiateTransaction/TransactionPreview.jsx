import SecuredBy from "../../assets/images/svg/secured-by.svg";

const TransactionPreview = (props) => {
  const { setShowTransactionPreview, setShowTransactionSuccess } = props;

  const onConfirmClicked = () => {
    setShowTransactionPreview(false);
    setShowTransactionSuccess(true);
  };

  return (
    <div className="absolute ml-[25px] w-[280px] bg-white rounded-[20px] top-1/2 left-1/2 lg:w-[900px] 2xl:w-[1097px] lg:p-8 p-4 2xl:p-16 -translate-x-1/2 -translate-y-1/2 z-30">
      <div className="flex items-center border-b-[2px] justify-between border-b-[#EAEAEA]">
        <h3 className="text-colorPrimary font-medium text-lg lg:font-semibold lg:text-3xl">
          Transaction summary
        </h3>{" "}
        <div
          className="font-extrabold text-xs lg:font-[25px] cursor-pointer"
          onClick={() => null}
        >
          Edit form
        </div>
      </div>

      <div className="flex justify-between mt-[25px]">
        <div className="w-[250px] p-5 bg-[#F8F8FA] lg:w-[630px]">
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p>Vendor ID</p>
            <p className="text-[#7D8287]">ID-60572218</p>
          </div>
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p>Product name</p>
            <p className="text-[#7D8287]">Iphone 13</p>
          </div>
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p>Product amount</p>
            <p className="text-[#7D8287]">N30,000</p>
          </div>
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p>Phone number</p>
            <p className="text-[#7D8287]">N30,000</p>
          </div>
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p>Transaction cost</p>
            <p className="text-[#7D8287]">N300</p>
          </div>
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p> Due date</p>
            <p className="text-[#7D8287]"> 25 - 5 - 2022</p>
          </div>
          <div className="border-b mb-4 pb-4 flex justify-between border-b-[#02479D]">
            <p>Quantity</p>
            <p className="text-[#7D8287]"> 2</p>
          </div>
          <div className="border-b mb-4 pb-4 flex flex-col justify-between border-b-[#02479D]">
            <p className="mb-2">Description</p>
            <p className="text-[#7D8287]">
              One pair of black female corporate heel shoes and one pair of
              white unbranded sneakers
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Total</p>
            <div className="rounded-tl-2xl rounded-br-2xl bg-gradient-to-tr py-[15px] px-[30px] text-white inline-block from-colorPrimary to-[#0257C0B0]">
              N30,300
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end w-[320px]">
          <div />
          <div className="text-center p-5">
            <div>
              <input type="checkbox" name="" id="" />
              <span className="text-[#7D8287] ml-[6px] font-light text-sm">
                Terms & conditions{" "}
                <span className="text-colorPrimary">Read here</span>
              </span>
            </div>
            <button
              onClick={onConfirmClicked}
              className="px-[31px] my-[27px] rounded-md py-[11px] text-colorPrimary bg-[#2321644F]"
            >
              Confirm
            </button>
            <img src={SecuredBy} alt="secured_by" className="w-[169] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPreview;
