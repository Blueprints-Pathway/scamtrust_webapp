import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import InitiateTransaction from "../../components/InitiateTransaction/InitiateTransaction";
import InitiationSuccessful from "../../components/InitiateTransaction/InitiationSuccessful";
import TransactionPreview from "../../components/InitiateTransaction/TransactionPreview";
import Layout from "../../components/Layout/Layout";
import CustDashboard from "../../components/Pages/CustDashboard/CustDashboard";
import Backdrop from "../../components/UI/Backdrop";
import { fetchUser } from "../../services/auth";
import SecuredBy from "../../assets/images/svg/secured-by.svg";

const USER_TYPE = "VENDOR";

const CustomerDashboard = () => {
  const [showInitiateTransaction, setShowInitiateTransaction] = useState(false);
  const [showTransactionPreview, setShowTransactionPreview] = useState(false);
  const [showTransactionSuccess, setShowTransactionSuccess] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, user, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  //@TODO  NAVIGATE USER TO LOGIN
  useEffect(() => {
    const isWithdraw = window.location.href.split("#")[1] === "withdraw";
    if (isWithdraw) {
      setIsWithdrawing(true);
    }

    if (!user) {
      navigate("/#customer-dashboard");
    }
    (async () => console.log(await fetchUser()))();
    if (user.data.usertype !== USER_TYPE) {
      navigate("/#customer-dashboard");
    }
  }, [navigate, user]);
  return (
    <Layout heading="Dashboard">
      {showInitiateTransaction ? (
        <Backdrop showInitiateTransaction={showInitiateTransaction}>
          <InitiateTransaction
            setShowInitiateTransaction={setShowInitiateTransaction}
            setShowTransactionPreview={setShowTransactionPreview}
          />
        </Backdrop>
      ) : (
        <></>
      )}

      {showTransactionPreview ? (
        <Backdrop showTransactionPreview={showTransactionPreview}>
          <TransactionPreview
            setShowTransactionPreview={setShowTransactionPreview}
            setShowTransactionSuccess={setShowTransactionSuccess}
          />
        </Backdrop>
      ) : (
        <></>
      )}
      {showTransactionSuccess ? (
        <Backdrop showTransactionSuccess={showTransactionSuccess}>
          <InitiationSuccessful
            setShowTransactionSuccess={setShowTransactionSuccess}
          />
        </Backdrop>
      ) : (
        <></>
      )}
      <div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
      <div className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] mx-auto bg-white">
        <div className="flex justify-between items-center mb-11 md:mb-16">
          <p className="font-semibold text-xl md:text-[30px]">Withdrawal</p>
          <p className="font-extrabold text-lg md:text-[25px]">Close x</p>
        </div>

        <div className="mb-11 md:mb-16">
          <label className="text-xl md:text-3xl block" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="block placeholder:text-[#E5E7E9] focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]"
          />
        </div>

        <div className="mb-11 md:mb-16">
          <label className="text-xl md:text-3xl block" htmlFor="amount">
            Destination account
          </label>
          <input
            type="number"
            placeholder="Choose destination account"
            className="block placeholder:text-[#E5E7E9] focus:outline-none w-full p-2 border-b border-b-[#C0C0C0]"
          />
        </div>

        <div className="flex justify-between items-center">
          <img src={SecuredBy} alt="SecuredByScamTrust" />
          <button className="bg-colorPrimary text-white px-7 py-3 rounded-md">Continue</button>
        </div>
      </div>
      <CustDashboard setShowInitiateTransaction={setShowInitiateTransaction} />
    </Layout>
  );
};

export default CustomerDashboard;
