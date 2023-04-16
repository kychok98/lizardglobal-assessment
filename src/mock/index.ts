// @ts-nocheck
import { createServer } from 'miragejs';
import { PAGE_SIZE } from './constants';

import data from './data.json';
import { filterPostsByCategory } from './utils';

let cachedCategories: string[] | undefined;

createServer({
  routes() {
    this.namespace = 'api';
    this.timing = 1000;

    this.get('/posts', (_, req) => {
      const cursor = +req.queryParams.cursor || 0;
      const categories = req.queryParams.categories as unknown as string[];

      const totalPosts = filterPostsByCategory(data.posts, categories || []);
      const totalCount = totalPosts.length;

      const [start, end] = (() => {
        if (totalCount < PAGE_SIZE) return [0, PAGE_SIZE];
        return [cursor * PAGE_SIZE, (cursor + 1) * PAGE_SIZE];
      })();

      const next = totalCount > end ? cursor + 1 : undefined;
      const posts = totalPosts.slice(start, end);

      return {
        posts,
        count: posts.length,
        totalCount,
        next,
      };
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
