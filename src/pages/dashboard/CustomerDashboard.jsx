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

const USER_TYPE = "VENDOR";

const CustomerDashboard = () => {
  const [showInitiateTransaction, setShowInitiateTransaction] = useState(false);
  const [showTransactionPreview, setShowTransactionPreview] = useState(false);
  const [showTransactionSuccess, setShowTransactionSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, user, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  //@TODO  NAVIGATE USER TO LOGIN

  useEffect(() => {
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
      <CustDashboard setShowInitiateTransaction={setShowInitiateTransaction} />
    </Layout>
  );
};

export default CustomerDashboard;
