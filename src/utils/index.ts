import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  return dayjs(date).format('DD-MM-YYYY hh:mm:ss');
};

export const getUniqueBy = (arr: any[] = [], key: string = '') => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};
