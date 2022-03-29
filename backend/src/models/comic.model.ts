import { type } from "os";

type Comic = {
  id?: number;
  name: string;
  author: string;
  date_of_publication: string;
  url_image: string;
};

export default Comic;