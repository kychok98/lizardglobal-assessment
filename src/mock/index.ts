import { createServer } from 'miragejs';

import data from './data.json';
import { filterPostsByCategory } from './utils';

let cachedCategories: string[] | undefined;

createServer({
  routes() {
    this.namespace = 'api';
    this.timing = 1000;

    this.get('/posts', (_, req) => {
      const categories =
        (req.queryParams.categories as unknown as string[]) || [];
      const posts = filterPostsByCategory(data.posts, categories);

      return { posts, count: posts.length };
    });

    this.get(`/posts/:id`, (_, req) => {
      const post = data.posts.find(datum => datum.id === req.params.id);
      if (!post) return '';

      return post;
    });

    this.get(`/posts/categories`, (_, _req) => {
      if (cachedCategories) return cachedCategories;

      const categories = data.posts.reduce((acc, post) => {
        post.categories.forEach(category => {
          if (acc.includes(category.name)) return;
          acc = [...acc, category.name];
        });
        return acc;
      }, [] as string[]);

      cachedCategories = categories;

      return categories;
    });
  },
});
