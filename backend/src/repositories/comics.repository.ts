import poll from "../database/mariadb";
import Comic from "../models/comic.model";

class ComicsRepository {
  // find all comics
  async findAllComics(): Promise<Comic[]> {
    try {
      const query = `SELECT * FROM comics`;
      const result = await poll.query(query);

      let comics: Comic[] = [];

      if (result.length) {
        [...comics] = result;
      }

      return comics;
    } catch {
      throw new Error();
    }
  }

  // find comic by id
  async findComicById(id: string): Promise<Comic[]> {
    try {
      const query = `SELECT * FROM comics WHERE id = ${id}`;
      const result = await poll.query(query);

      let comics: Comic[] = [];

      if (result.length) {
        [...comics] = result;
      }

      return comics;
    } catch {
      throw new Error();
    }
  }

  // create comic
  async createComic(comic: Comic): Promise<Object> {
    try {
      const query = `INSERT INTO comics (name, author, date_of_publication, url_image) VALUES("${comic.name}", "${comic.author}", "${comic.date_of_publication}", "${comic.url_image}")`;
      const result = await poll.query(query);

      return result;
      
    } catch {
      throw new Error();
    }
  }

  // update comic
  async updateComic(id: string, comic: Comic): Promise<Object> {
    try {
      const query = `UPDATE comics SET name = "${comic.name}", author = "${comic.author}", date_of_publication = "${comic.date_of_publication}", url_image = "${comic.url_image}" WHERE id = ${id}`;
      const result = await poll.query(query);

      return result;
    } catch {
      throw new Error();
    }
  }

  // delete comic
  async deleteComic(id: string): Promise<Object> {
    try {
      const query = `DELETE FROM comics WHERE id = ${id}`;
      const result = await poll.query(query);

      return result;
    } catch {
      throw new Error();
    }
  }
}

export default new ComicsRepository();
