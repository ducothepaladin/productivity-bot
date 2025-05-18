import { generateTaskService } from "../services/taskServices.js";

export const generateDemoTasks = async (req, res) => {
  const { scheduleText } = req.body;
  try {
    const demoTasks = await generateTaskService(
      scheduleText,
      "681d95ec01f1fdb994b48c03"
    );
    res.status(200).json({ demoTasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
