import connectDb from "../config/db.js";
import { taskSeeder } from "./taskSeeder.js";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
    await connectDb(process.env.DATABASE_URL);
    await taskSeeder();
}


main();