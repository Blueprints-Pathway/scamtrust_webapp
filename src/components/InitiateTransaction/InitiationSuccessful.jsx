import React from "react";

import SuccessIcon from "../../assets/images/svg/encrypted.svg";
import CompanyIcon from "../../assets/images/svg/company-icon.svg";
import SecuredBy from "../../assets/images/svg/secured-by.svg";

const InitiationSuccessful = (props) => {
  const { setShowTransactionSuccess } = props;

  const onDoneClicked = () => {
    setShowTransactionSuccess(false);
  };

  return (
    <div className="absolute ml-[25px] w-[80vw] bg-white rounded-[20px] top-1/2 left-1/2 lg:w-[70vw] 2xl:w-[1097px] lg:p-8 p-4 2xl:p-16 -translate-x-1/2 -translate-y-1/2 z-30">
      <div className="flex mb-[52px] items-center border-b-[2px] justify-between border-b-[#EAEAEA]">
        <h3 className="text-colorPrimary font-medium text-lg lg:font-semibold lg:text-3xl">
          Withdrawal details
        </h3>{" "}
        <div className="font-extrabold text-xs lg:font-[25px]" />
      </div>

      <h4 className="text-colorPrimary font-bold text-2xl text-center mb-4">
        Transaction Initiation Successful 🎉
      </h4>

      <img
        src={SuccessIcon}
        alt="successful transaction"
        className="w-[127px] mx-auto"
      />

      <div className="text-colorPrimary mt-4 font-normal text-center w-[377px] mx-auto">
        <p className="max-w-[377px] text-center">
          A notification has been sent to <br /> Ridic Ventures.
        </p>
        <p className="max-w-[377px] text-center">
          You will be notified once the vendor responds <br /> to the request.
        </p>
      </div>

      <p className="font-medium text-2xl mb-5">Recepient</p>
      <div className="bg-[rgba(35,33,100,0.03)] mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={CompanyIcon}
              alt="icon"
              className="w-[52px] h-[52px] mr-3"
            />
            <div className="flex flex-col">
              <p className="text-[22px]">Ridic ventures</p>
              <p className="text-[#444445] text-lg">ID-50572218</p>
            </div>
          </div>

          <div className="flex flex-col text-right text-[#44444566]">
            <p>30th May 2022</p>
            <p> 8:48 AM</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div />
        <div className="flex items-center">
          <img
            src={SecuredBy}
            alt="secured_by_scam_trust"
            className="w-[169px] mr-6"
          />
          <button
            onClick={onDoneClicked}
            className="bg-colorPrimary text-white rounded-md font-semibold px-[50px] py-[10px]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitiationSuccessful;
