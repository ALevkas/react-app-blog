import { $authHost, $host } from './index';

export const registration = async (username, password) => {
    const response = await $host.post('auth/registration', {
        username: username,
        password: password,
    });
    return response;
};

export const login = async (username, password) => {
    const response = await $host.post('auth/login', {
        username: username,
        password: password,
    });
    return response;
};
