import dotenv from "dotenv";
import mariadb from "mariadb";

dotenv.config();

const pool = mariadb.createPool({
  host: "localhost",
  database: "detective_comics",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 3300,
});

export default pool;