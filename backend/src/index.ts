import express from "express";
import comicsRouter from "./router/comics.route";
import pool from "./models/pool";

const cors = require("cors");
const app = express();

// port
const PORT = process.env.PORT || 3000;

// cors
app.use(cors());
// json
app.use(express.json());
// objeto conterá valores de qusalquer tipo em vez de apenas strings.
app.use(express.urlencoded({ extended: true }));

// router
app.use(comicsRouter);

app.listen(PORT, () => {
  console.log(`Connections: ${pool.activeConnections()}`);
  console.log(`Server running on Port ${PORT}🛵...`);
});