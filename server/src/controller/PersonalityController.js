import { initialSetupService } from "../services/personalityServices.js";


export const initialSetup = async (req, res) => {
    const {survey, userId} = req.body;
    try {
        const data = await initialSetupService({survey, userId});

        res.status(200).json(data);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}