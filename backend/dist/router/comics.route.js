"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const http_status_codes_1 = require("http-status-codes");
const comics_repository_1 = __importDefault(require("../repositories/comics.repository"));
const comicsRouter = (0, express_1.Router)();
comicsRouter.get("/", (req, res) => {
    res
        .status(http_status_codes_1.StatusCodes.OK)
        .send(`<h2>Detective Comics🦇</h2> <a href='http://localhost:${process.env.PORT}/comics'>/comics</a>`);
});
comicsRouter.get("/comics", async (req, res) => {
    try {
        const comics = await comics_repository_1.default.findAllComics();
        res.status(http_status_codes_1.StatusCodes.OK).send(comics);
    }
    catch {
        throw new Error();
    }
});
comicsRouter.get("/comics/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const comics = await comics_repository_1.default.findComicById(id);
        res.status(http_status_codes_1.StatusCodes.OK).send(comics);
    }
    catch {
        throw new Error();
    }
});
comicsRouter.post("/comics/", [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Você precisa preencher esse campo"),
    (0, express_validator_1.body)("author").notEmpty().withMessage("Você precisa preencher esse campo"),
    (0, express_validator_1.body)("date_of_publication").notEmpty().withMessage("Você precisa preencher esse campo"),
    (0, express_validator_1.body)("url_image").notEmpty().withMessage("Você precisa preencher esse campo"),
], async (req, res) => {
    try {
        const erros = (0, express_validator_1.validationResult)(req);
        if (!erros.isEmpty()) {
            return res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ error: erros.array() });
        }
        const comic = req.body;
        const addComic = await comics_repository_1.default.createComic(comic);
        res.status(http_status_codes_1.StatusCodes.CREATED).send({
            msg: "Successfully created✅",
            comic: [comic],
        });
    }
    catch {
        throw new Error();
    }
});
comicsRouter.put("/comics/:id", [
    (0, express_validator_1.body)("name").notEmpty(),
    (0, express_validator_1.body)("author").notEmpty(),
    (0, express_validator_1.body)("date_of_publication").notEmpty(),
    (0, express_validator_1.body)("url_image").notEmpty(),
], async (req, res) => {
    try {
        const erros = (0, express_validator_1.validationResult)(req);
        if (!erros.isEmpty()) {
            return res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ error: erros.array() });
        }
        const id = req.params.id;
        const comic = req.body;
        const updateComic = comics_repository_1.default.updateComic(id, comic);
        res.status(http_status_codes_1.StatusCodes.CREATED).send({
            msg: "Successfully updated📝",
        });
    }
    catch {
        throw new Error();
    }
});
comicsRouter.delete("/comics/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteComic = comics_repository_1.default.deleteComic(id);
        res.status(http_status_codes_1.StatusCodes.CREATED).send({
            msg: "Successfully deleted❌",
        });
    }
    catch {
        throw new Error();
    }
});
exports.default = comicsRouter;
