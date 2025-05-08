import API from "@/lib/api/apiConfig";
import type { RegisterUser } from "@/type/Auth";


export const register = async (user: RegisterUser) => {
    try {
      const response = await API.post("/auth/register", user);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  };