import express from 'express';
import authRouter = require('./routes/auth');

const app = express();

app.use("/auth",authRouter)

app.get("/", (req, res) => {
    res.send("Welcom to my app !!!!!!!!!!!!!!!")
})

app.listen(8000, () => {
    console.log("server started on ort 8000");
})


