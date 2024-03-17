// api/employee.ts

import axios from "axios";
import { endpoints } from "./endpoints";

type TShift = {
  day: string;
  startTime: string;
  endTime: string;
};

type TContackInfo = {
  email: string;
  phone: string;
};

export type TRegisterEmployee = {
  name: string;
  role: string;
  shifts: TShift[];
  contactInfo: TContackInfo;
  password: string;
};

export const registerEmployee = async (formData: TRegisterEmployee) => {
  try {
    const response = await axios.post(endpoints.getEmployees, formData);

    if (response.status !== 201) {
      throw new Error("Failed to register employee");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
