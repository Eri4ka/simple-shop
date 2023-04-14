export const clearURLQueries = (path: string) => path.replace(/\?.*/gi, '');

export const getSalaryDiscount = (price: number, percent: number) => {
  return Math.floor(price - (price * percent) / 100);
};
