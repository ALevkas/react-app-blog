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
    const response = await $host.get('post/posts');
    return response;
};

export const createPost = async (title, content) => {
    const response = await $host.post('post/create', {
        title: title,
        content: content,
    });
    return response;
};

export const getComments = async (id) => {
    const response = await $host.post('post/comments', {
        id: id,
    });
    return response;
};

export const getComment = async (id) => {
    const response = await $host.post('post/comment', {
        id: id,
    });
    return response;
};

export const createComment = async (postId, value) => {
    const response = await $host.post('post/createComment', {
        postId: postId,
        content: value,
    });
    return response;
};
