import express, { Request, Response } from "express";
require("dotenv").config();

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        msg: "Hello world"
    });
});


app.listen(process.env.PORT ?? 3000, () => {
    console.log("Server running at port", process.env.port ?? 3000);
});