import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import cookiePhaser from "cookie-parser";

import authRouter from "./routes/authRoutes.js";


const app = express();

//env config
dotenv.config();
const port = process.env.PORT;
const clientUrl = process.env.CLIENT_URL;
const dbUrl = process.env.DATABASE_URL;

//middlewares
app.use(express.json());
app.use(cors({origin: clientUrl}));
app.use(cookiePhaser());

//route
app.use("/api/auth", authRouter);


connectDb(dbUrl).then(() => {
    app.listen(port, () => {
        console.log(`Server is listen on port ${port}`)
    })
})

