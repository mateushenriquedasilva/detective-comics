"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mariadb_1 = __importDefault(require("mariadb"));
dotenv_1.default.config();
const poll = mariadb_1.default.createPool({
    host: "localhost",
    database: "detective_comics",
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 3306,
});
exports.default = poll;
