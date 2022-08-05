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
    const result = await fetch(`${scamtrustApi}user/getdetails`, apiConfig());
    const user = await result.json();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
