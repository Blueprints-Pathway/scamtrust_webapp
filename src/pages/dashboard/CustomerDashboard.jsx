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
import WithdrawFunds from "../../components/Pages/CustDashboard/WithdrawFunds";
import ConfirmWIthdrawFunds from "../../components/Pages/CustDashboard/ConfirmWIthdrawFunds";
import ConfirmTransactionPin from "../../components/Pages/CustDashboard/ConfirmTransactionPin";
import SuccessfulWithdrawal from "../../components/Pages/CustDashboard/SuccessfulWithdrawal";

const USER_TYPE = "VENDOR";

const CustomerDashboard = () => {
  const [showInitiateTransaction, setShowInitiateTransaction] = useState(false);
  const [showTransactionPreview, setShowTransactionPreview] = useState(false);
  const [showTransactionSuccess, setShowTransactionSuccess] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [confirmTransactionPin, setConfirmTransactionPin] = useState(false);
  const [confirmWithdraw, setConfirmWithdraw] = useState(false);
  const [withdrawSuccessful, setWithdrawSuccessful] = useState(false);

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
      {isWithdrawing ? (
        <WithdrawFunds
          setIsWithdrawing={setIsWithdrawing}
          startWithdrawFunds={isWithdrawing}
          setConfirmTransactionPin={setConfirmTransactionPin}
        />
      ) : (
        <></>
      )}
      <ConfirmWIthdrawFunds
        setConfirmWithdraw={setConfirmWithdraw}
        confirmWithdraw={confirmWithdraw}
        setWithdrawSuccessful={setWithdrawSuccessful}
        setConfirmTransactionPin={setConfirmTransactionPin}
      />
      <ConfirmTransactionPin
        confirmTransactionPin={confirmTransactionPin}
        setConfirmWithdraw={setConfirmWithdraw}
        setIsWithdrawing={setIsWithdrawing}
        setConfirmTransactionPin={setConfirmTransactionPin}
      />
      <SuccessfulWithdrawal
        setWithdrawSuccessful={setWithdrawSuccessful}
        withdrawSuccessful={withdrawSuccessful}
      />
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
      <CustDashboard
        setIsWithdrawing={setIsWithdrawing}
        setShowInitiateTransaction={setShowInitiateTransaction}
      />
    </Layout>
  );
};

export default CustomerDashboard;
