import { Router, Response, Request } from "express";
import { validationResult, body } from "express-validator";
import { StatusCodes } from "http-status-codes";
import comicsRepository from "../repositories/comics.repository";
const comicsRouter = Router();

comicsRouter.get("/", (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .send(
      `<h2>Detective Comics🦇</h2> <a href='http://localhost:${process.env.PORT}/comics'>/comics</a>`
    );
});

// find comics
comicsRouter.get("/comics", async (req: Request, res: Response) => {
  try {
    const comics = await comicsRepository.findAllComics();

    res.status(StatusCodes.OK).send(comics);
  } catch {
    throw new Error();
  }
});

// find comic by id
comicsRouter.get("/comics/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const comics = await comicsRepository.findComicById(id);

    res.status(StatusCodes.OK).send(comics);
  } catch {
    throw new Error();
  }
});

// create comic
comicsRouter.post(
  "/comics/",
  [
    body("name").notEmpty().withMessage("Você precisa preencher esse campo"),
    body("author").notEmpty().withMessage("Você precisa preencher esse campo"),
    body("date_of_publication").notEmpty().withMessage("Você precisa preencher esse campo"),
    body("url_image").notEmpty().withMessage("Você precisa preencher esse campo"),
  ],
  async (req: Request, res: Response) => {
    try {
      const erros = validationResult(req);
      if (!erros.isEmpty()) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: erros.array() });
      }

      const comic = req.body;
      const addComic = await comicsRepository.createComic(comic);

      res.status(StatusCodes.CREATED).send({
        msg: "Successfully created✅",
        comic: [comic],
      });
    } catch {
      throw new Error();
    }
  }
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
  async (req: Request, res: Response) => {
    try {
      const erros = validationResult(req);
      if (!erros.isEmpty()) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: erros.array() });
      }
      
      const id = req.params.id;
      const comic = req.body;
      const updateComic = comicsRepository.updateComic(id, comic);

      res.status(StatusCodes.CREATED).send({
        msg: "Successfully updated📝",
      });
    } catch {
      throw new Error();
    }
  }
);

// delete comic
comicsRouter.delete("/comics/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteComic = comicsRepository.deleteComic(id);

    res.status(StatusCodes.CREATED).send({
      msg: "Successfully deleted❌",
    });
  } catch {
    throw new Error();
  }
});

export default comicsRouter;
