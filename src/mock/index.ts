import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';
    this.timing = 1000;

    this.get('/posts', (_, _req) => {
      return data.posts;
    });

    this.get(`/posts/:id`, (_, req) => {
      const post = data.posts.find(datum => datum.id === req.params.id);
      if (!post) return '';

      return post;
    });
  },
});
