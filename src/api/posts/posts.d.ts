interface IAuthor {
  name: string;
  avatar: string;
}

interface ICategory {
  id: string;
  name: string;
}

interface IPost {
  id: string;
  title: string;
  publishDate: string;
  author: IAuthor;
  summary: string;
  categories: ICategory[];
}

interface IGetPostParams {
  categories: string[];
  cursor: number;
}

interface IGetPostRes {
  posts: IPost[];
  count: number;
  totalCount: number;
  next: number | undefined;
}
