import { scamtrustApi } from "../constants/apis";

const ApiEndPoint = `${scamtrustApi}/transaction`;

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2NhbXRydXN0Lmhlcm9rdWFwcC5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2NTkzNTI0MjQsImV4cCI6MTY1OTM1NjAyNCwibmJmIjoxNjU5MzUyNDI0LCJqdGkiOiI0SjlPdXVqR2N5ZHhGeGFxIiwic3ViIjoiMTQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.3WNC14ycHfLRVcn_gfDOJWaQL8-QapXlXKyscf6UISo";

const apiConfig = (method) => {
  const config = {
    method,
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
