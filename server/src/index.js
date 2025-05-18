import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import cookiePhaser from "cookie-parser";

import authRouter from "./routes/authRoutes.js";
import personalityRouter from "./routes/personalityRoutes.js";
import taskRouter from "./routes/taskRoutes.js";


const app = express();

//env config
dotenv.config();
const port = process.env.PORT;
const clientUrl = process.env.CLIENT_URL;
const dbUrl = process.env.DATABASE_URL;

//middlewares
app.use(express.json());
app.use(cors({origin: [clientUrl], credentials: true}));
app.use(cookiePhaser());

//route
app.use("/api/auth", authRouter);
app.use("/api/personality", personalityRouter);
app.use("/api/task", taskRouter);


connectDb(dbUrl).then(() => {
    app.listen(port, () => {
        console.log(`Server is listen on port ${port}`)
    })
})

