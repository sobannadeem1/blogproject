import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
