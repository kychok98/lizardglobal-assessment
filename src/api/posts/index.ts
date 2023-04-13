import _axios from 'axios';

const axios = _axios.create({ baseURL: '/api' });

export const getPosts = async (): Promise<Post[]> => {
  const result = await axios.get('/posts');
  return result.data;
};

export const getPostById = async (id: string): Promise<Post> => {
  const result = await axios.get(`/posts/${id}`);
  return result.data;
};
