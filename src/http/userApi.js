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

export const getPosts = async () => {
    const response = await $authHost.get('post/posts');
    return response;
};

export const getComments = async (id) => {
    const response = await $authHost.post('post/comments', {
        id: id,
    });
    return response;
};

export const getComment = async (id) => {
    const response = await $authHost.post('post/comment', {
        id: id,
    });
    return response;
};
