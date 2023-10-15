import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, {
    path: '/',
    expires: oneWeekFromNow,
    httpOnly: true,
  });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name, { path: '/', httpOnly: true });
};
