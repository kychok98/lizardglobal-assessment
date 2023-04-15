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
}

interface GetPostRes {
  posts: Post[];
  count: number;
}