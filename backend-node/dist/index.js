"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comics_route_1 = __importDefault(require("./router/comics.route"));
const mariadb_1 = __importDefault(require("./database/mariadb"));
const cors = require("cors");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(comics_route_1.default);
app.listen(PORT, () => {
    console.log(`Connections: ${mariadb_1.default.activeConnections()}`);
    console.log(`Server running on Port ${PORT}🛵...`);
});
