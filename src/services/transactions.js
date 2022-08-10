import { scamtrustApi } from "../constants/apis";

const ApiEndPoint = `${scamtrustApi}/transaction`;

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2NhbXRydXN0Lmhlcm9rdWFwcC5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2NjAxMTI2NzgsImV4cCI6MTY2MDExNjI3OCwibmJmIjoxNjYwMTEyNjc4LCJqdGkiOiIya0tVcHVxZ1M0TWF0OEpSIiwic3ViIjoiMTQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.IM0j2IEYTnP6Uq0dksFKYw6Z8FAVqdnMFNYYCzQXi38";

const apiConfig = (method, data) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      AUTHORIZATION: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(data),
  };
  return config;
};

export const createTransaction = async (formData) => {
  try {
    const result = await fetch(
      `${ApiEndPoint}/create`,
      apiConfig("POST", formData)
    );
    const response = await result.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchTransactions = async () => {
  try {
    const result = await fetch(`${ApiEndPoint}/lists/vendor`, apiConfig());
    const transactions = await result.json();
    return transactions;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchTransaction = async (transactionID) => {
  try {
    const result = await fetch(
      `${ApiEndPoint}/view/${transactionID}`,
      apiConfig()
    );
    const transactions = await result.json();
    return transactions;
  } catch (error) {}
};
