import { TRegisterEmployee, registerEmployee } from "../api/employeeApi";

export const registerEmployeeService = async (formData: TRegisterEmployee) => {
  try {
    const data = await registerEmployee(formData);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
