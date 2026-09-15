import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Welcom to my app !!!!!!1o!!!!!!!!!")
})

app.listen(8000, () => {
    console.log("server started on ort 8000");
})


