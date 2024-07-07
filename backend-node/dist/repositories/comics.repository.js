"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mariadb_1 = __importDefault(require("../database/mariadb"));
class ComicsRepository {
    async findAllComics() {
        try {
            const query = `SELECT * FROM comics`;
            const result = await mariadb_1.default.query(query);
            let comics = [];
            if (result.length) {
                [...comics] = result;
            }
            return comics;
        }
        catch {
            throw new Error();
        }
    }
    async findComicById(id) {
        try {
            const query = `SELECT * FROM comics WHERE id = ${id}`;
            const result = await mariadb_1.default.query(query);
            let comics = [];
            if (result.length) {
                [...comics] = result;
            }
            return comics;
        }
        catch {
            throw new Error();
        }
    }
    async createComic(comic) {
        try {
            const query = `INSERT INTO comics (name, author, date_of_publication, url_image) VALUES("${comic.name}", "${comic.author}", "${comic.date_of_publication}", "${comic.url_image}")`;
            const result = await mariadb_1.default.query(query);
            return result;
        }
        catch {
            throw new Error();
        }
    }
    async updateComic(id, comic) {
        try {
            const query = `UPDATE comics SET name = "${comic.name}", author = "${comic.author}", date_of_publication = "${comic.date_of_publication}", url_image = "${comic.url_image}" WHERE id = ${id}`;
            const result = await mariadb_1.default.query(query);
            return result;
        }
        catch {
            throw new Error();
        }
    }
    async deleteComic(id) {
        try {
            const query = `DELETE FROM comics WHERE id = ${id}`;
            const result = await mariadb_1.default.query(query);
            return result;
        }
        catch {
            throw new Error();
        }
    }
}
exports.default = new ComicsRepository();
