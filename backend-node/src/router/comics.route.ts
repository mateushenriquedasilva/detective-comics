import { Router, Response, Request } from "express";
import {
  findAllComics,
  findComicById,
  createComic,
  updateComic,
  deleteComic,
} from "../controllers/comics.controller";
import { body } from "express-validator";
import { StatusCodes } from "http-status-codes";
const comicsRouter = Router();

comicsRouter.get("/", (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .send(
      `<h2>Detective Comics🦇</h2> <a href='http://localhost:3000/comics'>/comics</a>`
    );
});

// find comics
comicsRouter.get("/comics", findAllComics);

// find comic by id
comicsRouter.get("/comics/:id", findComicById);

// create comic
comicsRouter.post(
  "/comics/",
  [
    body("name").notEmpty().withMessage("Você precisa preencher esse campo"),
    body("author").notEmpty().withMessage("Você precisa preencher esse campo"),
    body("date_of_publication")
      .notEmpty()
      .withMessage("Você precisa preencher esse campo"),
    body("url_image")
      .notEmpty()
      .withMessage("Você precisa preencher esse campo"),
  ],
  createComic
);

// update comic
comicsRouter.put(
  "/comics/:id",
  [
    body("name").notEmpty(),
    body("author").notEmpty(),
    body("date_of_publication").notEmpty(),
    body("url_image").notEmpty(),
  ],
  updateComic
);

// delete comic
comicsRouter.delete("/comics/:id", deleteComic);

export default comicsRouter;
