interface Author {
  name: string;
  avatar: string;
}

interface Category {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  publishDate: string;
  author: Author;
  summary: string;
  categories: Category[];
}

interface GetPostParams {
  categories: string[];
  cursor: number;
}

interface GetPostRes {
  posts: Post[];
  count: number;
  totalCount: number;
  next: number | undefined;
}
