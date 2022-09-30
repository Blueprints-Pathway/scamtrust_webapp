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

export const fetchUser = async (token) => {
  try {
    const result = await fetch(`${scamtrustApi}/user/getdetails`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
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
export const setSignupPin = async (data, token) => {
  try {
    const result = await fetch(`${scamtrustApi}/auth/set-pin`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `Bearer ${token}`,
      },
    });
    const response = await result.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const setUserSecurityQuestion = async (data, token) => {
  try {
    const result = await fetch(`${scamtrustApi}/auth/set-security-question`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `Bearer ${token}`,
      },
    });
    const response = await result.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
