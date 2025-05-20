import { confirmDemoTaskService, generateTaskService } from "../services/taskServices.js";

export const generateDemoTasks = async (req, res) => {
  const { scheduleText } = req.body;
  try {
    const demoTasks = await generateTaskService(
      scheduleText,
      req.user._id
    );
    res.status(200).json({ demoTasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const confirmTask = async (req, res) => {
  const { demo } = req.body;
  try {
    const task = await confirmDemoTaskService(demo, req.user._id);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}
