import express from "express";
import comicsRouter from "./router/comics.route";
import poll from "./database/mariadb";

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
  console.log(`Connections: ${poll.activeConnections()}`);
  console.log(`Server running on Port ${PORT}🛵...`);
});
