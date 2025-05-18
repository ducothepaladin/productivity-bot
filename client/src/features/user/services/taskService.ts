import API from "@/lib/api/apiConfig"


export const generateDemoTasks = async(scheduleBrief: {scheduleText: string}) => {
    try {
        const response =  await API.post("/task/generate", scheduleBrief);
        return response.data
    } catch(err) {
        console.log("Error generate", err);
        throw err;
    }

}