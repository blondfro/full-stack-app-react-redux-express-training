import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";

let port = 3001;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json
);

export const addNewTask = async task => {
  let db = await connectDB();
  let collection = db.collection("tasks");
  await collection.insertOne(task);
};


app.post("/task/new", async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.state(200).send();
});



app.listen(port, console.log("Server Listening on port: " + port));


