import API from "@/lib/api/apiConfig";
import type { RegisterUser, Credential } from "@/type/Auth";


export const register = async (user: RegisterUser) => {
    try {
      const response = await API.post("/auth/register", user);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  };

export const login = async (user: Credential) => {
  try {
    const response = await API.post("/auth/login", user);
    return response.data;
  } catch (error) {
    console.log("Error during login:", error);
    throw error;
  }
}