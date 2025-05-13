import API from "@/lib/api/apiConfig"
import type { SurveyResult } from "@/type/Survey"


export const initialSetup = async (survey: {survey: SurveyResult}) => {
    try {
        const response = await API.post("/personality/init", survey);
        return response.data;
    } catch(error) {
        console.error("Error during initailization:", error);
      throw error;
    }
}