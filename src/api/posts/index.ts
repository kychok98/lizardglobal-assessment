import _axios from 'axios';

const axios = _axios.create({ baseURL: '/api' });

export const getPosts = async (params?: IGetPostParams): Promise<IGetPostRes> => {
  const result = await axios.get('/posts', { params });
  return result.data;
};

export const getPostById = async (id: string): Promise<IPost> => {
  const result = await axios.get(`/posts/${id}`);
  return result.data;
};

export const getPostCategories = async (): Promise<string[]> => {
  const result = await axios.get('/posts/categories');
  return result.data;
};
