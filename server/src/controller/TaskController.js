import { confirmDemoTaskService, generateTaskService, getTaskByIdService, getTasksByDateService } from "../services/taskServices.js";

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


export const getTasksByDate = async (req, res) => {
  const { dateString } = req.query;

  try {
    const tasks = await getTasksByDateService(dateString, req.user._id);
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}


export const getTaskById = async (req, res) => {
  const {id} = req.params;

  try {
    const task = await getTaskByIdService(id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}



