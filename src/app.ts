import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use("/api", authRouter);

app.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`);
})