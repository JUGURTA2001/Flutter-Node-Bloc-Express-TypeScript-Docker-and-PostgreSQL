import express from 'express';
import authRouter from './routes/auth';   // ← changement ici

const app = express();

app.use(express.json());

app.use("/auth", authRouter)

app.get("/", (req, res) => {
    res.send("Welcome to my app !!!!!t!!!")
})

app.listen(8000, () => {
    console.log("server started on port 8000");  // ← petite correction au passage
})