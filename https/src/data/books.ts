// export type BookType = {
//   id: number;
//   title: string;
//   author: string;
// };
export interface IBook {
  id: number;
  title: string;
  author: string;
};
export interface IBookCreateOrUpdate extends Omit<IBook, "id"> {}

export const books: Array<IBook> = [
  { "id": 1, "title": "book1", "author": "author1" },
  { "id": 2, "title": "book2", "author": "author2" },
  { "id": 3, "title": "book3", "author": "author3" },
  { "id": 4, "title": "book4", "author": "author4" },
  { "id": 5, "title": "book5", "author": "author5" },
];