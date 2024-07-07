import comicsModel from "../models/comics.model";
import { validationResult } from "express-validator";
import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";

// find comics
export const findAllComics = async (req: Request, res: Response) => {
  try {
    const comics = await comicsModel.findAllComics();

    res.status(StatusCodes.OK).send(comics);
  } catch {
    throw new Error();
  }
};

// find comic by id
export const findComicById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const comics = await comicsModel.findComicById(id);

    res.status(StatusCodes.OK).send(comics);
  } catch {
    throw new Error();
  }
};

// create comic
export const createComic = async (req: Request, res: Response) => {
  try {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: erros.array() });
    }

    const comic = req.body;
    const addComic = await comicsModel.createComic(comic);

    res.status(StatusCodes.CREATED).send({
      msg: "Successfully created✅",
      comic: [comic],
    });
  } catch {
    throw new Error();
  }
};

// update comic
export const updateComic = async (req: Request, res: Response) => {
  try {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: erros.array() });
    }

    const id = req.params.id;
    const comic = req.body;
    const updateComic = comicsModel.updateComic(id, comic);

    res.status(StatusCodes.CREATED).send({
      msg: "Successfully updated📝",
    });
  } catch {
    throw new Error();
  }
};

// delete comic
export const deleteComic = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteComic = comicsModel.deleteComic(id);

    res.status(StatusCodes.CREATED).send({
      msg: "Successfully deleted❌",
    });
  } catch {
    throw new Error();
  }
};
