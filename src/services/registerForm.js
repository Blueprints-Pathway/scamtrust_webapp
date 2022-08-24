import axios from "axios";

const ApiEndPoint = "https://scamtrust.herokuapp.com/api/v1";

const apiConfig = (method = "get", data = {}) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      AUTHORIZATION: `Bearer ${""}`,
    },
    body: JSON.stringify(data),
  };
  return config;
};

export const fetchBusinessIndustries = async () => {
  try {
    const result = await axios.get(`${ApiEndPoint}/misc/list/industries`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchBusinessTypes = async () => {
  try {
    const result = await axios.get(`${ApiEndPoint}/misc/list/businesstypes`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
