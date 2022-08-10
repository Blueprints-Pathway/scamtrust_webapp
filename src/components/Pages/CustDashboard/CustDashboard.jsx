import { useState } from "react";

import Info from "../../../assets/images/svg/info.svg";
import Chat from "../../../assets/images/svg/chat.svg";
import SecuredBy from "../../../assets/images/svg/secured-by.svg";
import Add from "../../../assets/images/svg/add.svg";

const CustomerDashboard = (props) => {
  const { setShowInitiateTransaction } = props;

  const [transactionAmount, setTransactionAmount] = useState("");

  const onCreateTransactionClicked = () => {
    setShowInitiateTransaction((prevState) => !prevState);
  };

  const TRANSACTION_FEE = transactionAmount * 0.02;
  const TOTAL_AMOUNT = +TRANSACTION_FEE + +transactionAmount;

  return (
    <div className="flex flex-col md:flex-row gap-7 justify-between">
      <div className="min-w-[320px] w-[70%] 2xl:w-[685px]">
        <div className="w-full bg-[#FFFEFE] rounded-[24px] px-[37px] py-[29px] mb-[13px] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <p className="font-semibold text-lg 2xl:text-2xl text-colorPrimary">
            Chukwudi Osinachi
          </p>
          <p className="font-semibold text-lg 2xl:text-2xl text-[#7D8287]">
            ID - 6057702
          </p>

          <div className="border-b-2 mb-5 2xl:mb-[53px] border-b-colorGreen mt-[13px]" />

          <div className="flex justify-between">
            <div className="flex flex-col text-left">
              <h4 className="text-[#7d8287] font-semibold text-sm 2xl:text-lg">
                Total Balance
              </h4>
              <h2 className="text-colorPrimary font-bold text-lg 2xl:text-3xl">
                N 500,000.00
              </h2>
            </div>

            <div className="flex flex-col text-left">
              <h4 className="text-[#7d8287] font-semibold text-sm 2xl:text-lg">
                Pending Balance
              </h4>
              <h2 className="text-[#7d8287] font-bold text-lg 2xl:text-3xl">
                N 250,000.00
              </h2>
            </div>
          </div>

          <div className="flex justify-between mt-[20px] 2xl:mt-[53px]">
            <button className="bg-[#E9303B] w-[100px] hover:shadow-xl transition-all duration-300 2xl:w-[143px] text-center text-white py-[9px] rounded-lg">
              WITHDRAW
            </button>
            <button className="bg-colorGreen w-[100px] hover:shadow-xl transition-all duration-300 2xl:w-[143px] text-center text-white py-[9px] rounded-lg">
              FUND
            </button>
          </div>
        </div>

        {/* FEE CALCULATOR */}
        <div className="w-full bg-[#FFFEFE] rounded-[24px] px-[37px] py-[29px] mb-[13px]  hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <p className="2xl:text-xl text-colorPrimary">Fee Calculator</p>

          <div className="border-b-2 mb-5 2xl:mb-[53px] border-b-colorGreen mt-[13px]" />

          <div className="">
            <div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
              <h4 className="text-colorPrimary font-semibold text-sm 2xl:text-lg">
                Enter Transaction amount:
              </h4>
              <input
                type="text"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
              <h4 className="text-colorPrimary font-semibold text-sm 2xl:text-lg">
                Transaction fee:
              </h4>
              <input
                type="text"
                value={TRANSACTION_FEE === 0 ? "" : TRANSACTION_FEE}
                disabled
                className="w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center disabled:bg-[#E6E7E8] border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center text-left mb-4 2xl:mb-5">
              <h4 className="text-colorPrimary font-semibold text-sm 2xl:text-lg">
                Total amount:
              </h4>
              <input
                type="text"
                disabled
                value={TOTAL_AMOUNT === 0 ? "" : TOTAL_AMOUNT}
                className="w-[144px] ml-4 inline-block text-[10px] h-7 2xl:h-[34px] items-center disabled:bg-[#E6E7E8] border focus:outline-none border-[#E6E7E8] placeholder:text-[8px] 2xl:placeholder:text-xs pl-6 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around text-colorPrimary">
          <div className="min-w-[200px] hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mr-5">
            <div className="bg-[#ff9300] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
              <img
                className="w-[23px] h-[23px] object-contain"
                src={Info}
                alt="info"
              />
            </div>
            <h6 className="font-semibold text-xl">FAQs</h6>
            <p>Find answers instantly</p>
          </div>
          <div className="min-w-[200px] hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#E2D8F1] rounded-3xl">
            <div className="bg-[#5F0AC3] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
              <img
                className="w-[23px] h-[23px] object-contain"
                src={Chat}
                alt="chat"
              />
            </div>
            <h6 className="font-semibold text-xl">Chat</h6>
            <p>Start a conversation now</p>
          </div>
        </div>

        <div className="grid place-content-center mt-[100px]">
          <img src={SecuredBy} alt="secured by scam trust" />
        </div>
      </div>

      <div className="w-full overflow-y-scroll py-8 px-12">
        <div className="w-full mb-3 font-medium 2xl:font-bold text-base 2xl:text-lg text-colorPrimary flex justify-between pb-5 border-b border-b-[#CFD8DC]">
          <p>All</p>
          <p>Outgoing</p>
          <p>Cancelled </p>
          <p>Completed</p>
        </div>

        <div className="flex justify-between">
          <div />
          <button
            onClick={onCreateTransactionClicked}
            className="bg-colorGreen flex text-white items-center rounded-md px-2 py-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-700"
          >
            <span>Create transaction</span>
            <img src={Add} alt="add" className="mb-[-6px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
