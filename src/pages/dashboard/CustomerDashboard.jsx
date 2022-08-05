import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import CustDashboard from "../../components/Pages/CustDashboard/CustDashboard";
import { fetchUser } from "../../services/auth";

const USER_TYPE = "VENDOR";

const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, user, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // (async () => await fetchUser())();
    if (user.data.usertype !== USER_TYPE) {
      navigate("/#customer-dashboard");
    }
  }, []);
  return (
    <Layout heading="Dashboard">
      <CustDashboard />
    </Layout>
  );
};

export default CustomerDashboard;
