import React, { useEffect, useState } from 'react';

import { getPosts, createPost } from '../../http/userApi';
import { Posts } from '../Post/Posts';
import { Preloader } from '../Preloader/Preloader';

const getTokenUser = () => {
    const token = window.sessionStorage.getItem('token');

    return token ? token : null;
};

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [toggleNewPost, setToggleNewPost] = useState(false);

    const [tokenUser, setTokenUser] = useState(getTokenUser());

    const getAllPosts = async () => {
        setLoading(true);
        const response = await getPosts();
        if (response.status === 200) {
            setPosts(response.data);
        }
        setLoading(false);
    };

    const createNewPost = async () => {
        setToggleNewPost(!toggleNewPost);
        setLoading(true);
        const response = await createPost(title, content);
        if (response.status === 200) {
            getAllPosts();
        }
        setLoading(false);
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div className='home'>
            {!loading ? (
                <Posts
                    posts={posts}
                    errorMessage={errorMessage}
                    getAllPosts={getAllPosts}
                    tokenUser={tokenUser}
                />
            ) : (
                <Preloader />
            )}

            {tokenUser ? (
                toggleNewPost ? (
                    <>
                        <div className='post__create'>
                            <div className='input-field col'>
                                <input
                                    placeholder='Заголовок поста'
                                    id='first_name'
                                    type='text'
                                    className='validate'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className='input-field col'>
                                <input
                                    placeholder='Стартовое число'
                                    id='first_name'
                                    type='text'
                                    className='validate'
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='create-post'>
                            <button
                                className='btn'
                                onClick={() => createNewPost()}
                            >
                                Создать пост
                            </button>
                        </div>
                    </>
                ) : (
                    <div className='create-post'>
                        <button
                            className='btn'
                            onClick={() => setToggleNewPost(!toggleNewPost)}
                        >
                            Создать пост
                        </button>
                    </div>
                )
            ) : null}
        </div>
    );
};
