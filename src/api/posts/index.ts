import _axios from 'axios';

const axios = _axios.create({ baseURL: '/api' });

export const getPosts = async (params?: GetPostParams): Promise<GetPostRes> => {
  const result = await axios.get('/posts', { params });
  return result.data;
};

export const getPostById = async (id: string): Promise<Post> => {
  const result = await axios.get(`/posts/${id}`);
  return result.data;
};

export const getPostCategories = async (): Promise<string[]> => {
  const result = await axios.get('/posts/categories');
  return result.data;
};
