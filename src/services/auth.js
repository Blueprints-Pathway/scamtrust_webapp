import { scamtrustApi } from "../constants/apis";

const apiConfig = (method) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      //   AUTHORIZATION: `Bearer ${TOKEN}`,
    },
  };
  return config;
};

export const fetchUser = async () => {
  try {
    const result = await fetch(`${scamtrustApi}/user/getdetails`, apiConfig());
    const user = await result.json();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const registerUser = async (data) => {
  try {
    const result = await fetch(`${scamtrustApi}/auth/register`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await result.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
