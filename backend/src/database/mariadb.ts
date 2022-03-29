import dotenv from "dotenv";
import mariadb from "mariadb";

dotenv.config();

const poll = mariadb.createPool({
  host: "localhost",
  database: "detective_comics",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 3306,
});

export default poll;