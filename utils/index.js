import axios from "axios";
import { apiEndPoint } from "../redux/store";
// Api Endpoint

export const login = async (values) => {
  try {
    const { data } = await axios.post(`${apiEndPoint}/auth/login`, values);
    console.log("data", data);
    return data;
  } catch (error) {
    return error;
  }
};
