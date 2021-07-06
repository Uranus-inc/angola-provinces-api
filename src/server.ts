import express from "express";
import data from "./data/data";


const server = express();

server.get("/api/provinces", (req, res) => {
    return res.json(data())
})



server.listen(3000, () => console.log("Server is running..."));