import { scamtrustApi } from "../constants/apis";

const ApiEndPoint = `${scamtrustApi}/transaction`;

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2NhbXRydXN0Lmhlcm9rdWFwcC5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2NTkzMTEyMDMsImV4cCI6MTY1OTMxNDgwMywibmJmIjoxNjU5MzExMjAzLCJqdGkiOiJMQ3RaVHc4ekpaanFud2FLIiwic3ViIjoiMTQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.m-6OXvmPkuWEGtb9yalS9QopNlEtfhYTfSD9aQu5HD4";

const apiConfig = (method) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      AUTHORIZATION: `Bearer ${TOKEN}`,
    },
  };
  return config;
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
