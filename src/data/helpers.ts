export const isSafeUrl = (url: string) =>
  /^https:\/\//i.test(url) && !/[\[\]\s]/.test(url);
export const isEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
