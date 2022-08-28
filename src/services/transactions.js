import { scamtrustApi } from "../constants/apis";

const ApiEndPoint = `${scamtrustApi}/transaction`;

const apiConfig = (method, data, token) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      AUTHORIZATION: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  return config;
};

export const createTransaction = async (formData, token) => {
  console.log("PAYLOAD", formData);
  try {
    const result = await fetch(`${ApiEndPoint}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
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
