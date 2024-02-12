export interface IBook {
  title: string;
  author: string;
  publicationYear: number;
  synopsis: string;
  imageUrl: string;
}

export class BookModel implements IBook {
  constructor(
    public title: string,
    public author: string,
    public publicationYear: number,
    public synopsis: string,
    public imageUrl: string
  ) { }
}
