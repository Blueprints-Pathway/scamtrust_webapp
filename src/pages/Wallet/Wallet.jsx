import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import Eye from "../../assets/images/svg/eye.svg";
import Info from "../../assets/images/svg/info.svg";
import Chat from "../../assets/images/svg/chat.svg";
import MoreInfo from "../../assets/images/svg/more-info.svg";
import CopyBlack from "../../assets/images/svg/copy-black.svg";
import FundWallet from "../../components/Pages/Wallet/FundWallet";
import ConfirmAccount from "../../components/Pages/Wallet/ConfirmAccount";

const Wallet = () => {
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [showConfirmAccount, setShowConfirmAccont] = useState(false);

  const fundWalletHandler = () => {
    setShowFundWallet((prevState) => !prevState);
  };

  const confirmAccountHandler = () => {
    setShowConfirmAccont((prevState) => !prevState);
  };

  return (
    <Layout>
      <FundWallet
        setShowConfirmAccont={setShowConfirmAccont}
        fundWalletHandler={fundWalletHandler}
        showFundWallet={showFundWallet}
      />
      <ConfirmAccount
        setShowFundWallet={setShowFundWallet}
        showConfirmAccount={showConfirmAccount}
        setShowConfirmAccont={setShowConfirmAccont}
      />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="grid-cols-1 rounded-3xl bg-white w-full px-5 md:px-9 2xl:px-12 py-6">
              <div className="flex justify-between pb-1 border-b-2 border-b-colorSecondary mb-4">
                <p className="font-bold text-xl 2xl:text-2xl">Account</p>
                <p className="font-medium text-xl 2xl:text-2xl text-colorPrimary">
                  Ridic Ventures
                </p>
              </div>

              <div className="flex justify-between">
                <div />
                <img src={Eye} alt="eye" className="mb-3" />
              </div>

              <div className="flex justify-between ">
                <div>
                  <p className="font-medium md:text-xl 2xl:text-3xl text-colorSecondary mb-2">
                    N 500,000
                  </p>
                  <p className="font-medium flex mb-8 2xl:mb-12 md:text-lg text-sm 2xl:text-xl text-colorPrimary">
                    <span>Available Balance</span>

                    <img
                      className="2xl:ml-5 ml-3"
                      src={MoreInfo}
                      alt="more_info"
                    />
                  </p>
                  <button className="font-medium bg-[#E9303B] w-24 hover:shadow-md transition-shadow duration-300 text-white py-3 rounded-md">
                    WITHDRAW
                  </button>
                </div>
                <div>
                  <p className="font-medium md:text-xl 2xl:text-3xl text-colorSecondary mb-2">
                    N 500,000
                  </p>
                  <p className="font-medium mb-8 flex md:text-lg text-sm 2xl:text-xl text-colorPrimary">
                    <span>Outgoing Balance</span>

                    <img
                      className="2xl:ml-5 ml-3"
                      src={MoreInfo}
                      alt="more_info"
                    />
                  </p>
                  <button
                    onClick={fundWalletHandler}
                    className="font-medium bg-colorGreen w-24 hover:shadow-md transition-shadow duration-300 text-white py-3 rounded-md"
                  >
                    Fund
                  </button>
                </div>
              </div>

              <div className="mt-[45px]">
                <div className="flex justify-between">
                  <p className="font-medium items-center flex md:text-lg text-sm 2xl:text-xl mb-2">
                    <span>Primary Account</span>

                    <img
                      className="2xl:ml-5 w-3 h-3 ml-3"
                      src={MoreInfo}
                      alt="more_info"
                    />
                  </p>
                  <p
                    onClick={confirmAccountHandler}
                    className="cursor-pointer font-medium flex md:text-lg text-sm 2xl:text-xl mb-2"
                  >
                    <img
                      className="2xl:ml-5 mr-3"
                      src={CopyBlack}
                      alt="more_info"
                    />
                    <span>7820857716</span>
                  </p>
                </div>
                <div className="bg-[#EAEAEA] flex-col md:flex-row rounded-2xl mb-5 flex justify-between p-5">
                  <div className="text-sm 2xl:text-xl">
                    <p>
                      <span className="text-colorSecondary">
                        N 1,100,000.00
                      </span>{" "}
                      Withdrawn so far
                    </p>
                    <p className="font-medium">
                      2009419261 Zenith Ilerioluwa Brown
                    </p>
                  </div>
                  <button className="px-2 py-1 mt-3 md:mt-0 text-[8px] md:text-base 2xl:px-4 2xl:py-3 bg-colorPrimary text-white rounded-md">
                    Add Account
                  </button>
                </div>
              </div>
            </div>

            <div className="flex bg-white mt-4 py-14 flex-col lg:flex-row justify-between rounded-3xl text-colorPrimary">
              <div className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mb-3 lg:mb-0 lg:mr-5">
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
              <div className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#E2D8F1] rounded-3xl">
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
          </div>
          <div className="grid-cols-1 w-full bg-[#F2F2F2] rounded-[25px] py-14 px-8">
            <h5 className="font-medium text-xl">Wallet History</h5>

            <div className="overflow-x-auto mx-auto relative">
              <table className="w-full text-center">
                <tbody className="text-colorPrimary font-medium text-xs">
                  {WALLET_HISTORY.map((history, idx) => {
                    const { credit, vName, vNo, amount, date } = history;
                    return (
                      <tr key={idx} className="grid grid-cols-4 border-b border-b-[#707070]">
                        <td
                          scope="row"
                          className="py-4 text-[#707070] flex items-center font-medium whitespace-nowrap"
                        >
                          {date}
                        </td>
                        <td className="py-4 px-6 text-left">
                          <div className="flex flex-col">
                            <p className="font-medium text-colorPrimary">
                              {vName}
                            </p>
                            <p className="text-[#707070]">{vNo}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">₦ {amount}</td>
                        <td className="py-4">
                          <div className="items-center w-[87px] py-2 rounded-md justify-end bg-white inline-block">
                            <div
                              className={`${
                                credit ? "bg-colorSecondary" : "bg-[#FF0000]"
                              } w-3 h-3 inline-block rounded-full mr-[10px]`}
                            />
                            <p
                              className={`${
                                credit
                                  ? "text-colorSecondary"
                                  : "text-[#FF0000]"
                              } text-colorSecondary inline-block`}
                            >
                              {credit ? "Credit" : "Debit"}
                            </p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;

const WALLET_HISTORY = [
  {
    credit: true,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: false,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: true,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: false,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: true,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: false,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: true,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: false,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: true,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
  {
    credit: false,
    vName: "Ilerioluwa Brown",
    vNo: "TR-5347906",
    amount: "500,000",
    date: "10th Jan 2022",
  },
];
