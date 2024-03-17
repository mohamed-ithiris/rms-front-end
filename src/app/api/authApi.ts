import axios from "axios";
import { endpoints } from "./endpoints";

export type TLoginEmployee = {
  name: string;
  password: string;
};

export const loginEmployee = async (credentials: TLoginEmployee) => {
  try {
    const response = await axios.post(endpoints.auth, credentials);

    if (response.status !== 200) {
      throw new Error("Failed to login!");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
