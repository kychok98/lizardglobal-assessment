import dayjs from 'dayjs';

export const formatDate = (
  date: string,
  format = 'ddd MMM DD, YYYY, hh:mm:ss'
) => {
  return dayjs(date).format(format);
};

export const getUniqueBy = (arr: any[] = [], key: string = '') => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};
