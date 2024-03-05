import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/user.route"


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING as string)
.then(()=> {
    console.log("connected to database")
})

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "hello from server" });
});

app.get("/health", async (req: Request, res: Response) => {
    res.json({ message: "health Ok!" });
});


app.use("/api/my/user", userRouter)

const port = process.env.PORT || 6001

app.listen(port, () => {
    console.log(`server started on localhost:${port}`)
})
