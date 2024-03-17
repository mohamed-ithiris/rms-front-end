import { TLoginEmployee, loginEmployee } from "../api/authApi";

export const authService = async (
  formData: TLoginEmployee,
  setTokens: Function
) => {
  try {
    const data = await loginEmployee(formData);
    if (data?.accessToken !== "" && data?.refreshToken) {
      setTokens(data?.accessToken, data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
