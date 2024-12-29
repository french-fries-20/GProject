export const setToken = (key: string, value: string) => {
    localStorage.setItem(key, value);
};
export const getToken = (key: string) => {
    return localStorage.getItem(key);
};
export const removeToken = (key: string) => {
    localStorage.removeItem(key);
};