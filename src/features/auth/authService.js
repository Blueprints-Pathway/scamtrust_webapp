import axios from "axios";

import { scamtrustApi } from "../../constants/apis";

const login = async (loginData) => {
  const response = await axios.post(`${scamtrustApi}/auth/login`, loginData);

  if (response.data) {
    localStorage.setItem("scam-trust-user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = { login };

export default authService;
