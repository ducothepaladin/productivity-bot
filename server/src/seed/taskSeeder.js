import Task from "../model/Tasks.js"





export const taskSeeder = async () => {
    await Task.deleteMany();
    console.log("Tasks seeded..")
}