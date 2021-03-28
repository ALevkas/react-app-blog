import React, { useEffect, useState } from 'react';

import { getPosts } from '../../http/userApi';
import { Posts } from '../Post/Posts';
import { Preloader } from '../Preloader/Preloader';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const getAllPosts = async () => {
        const response = await getPosts();
        if (response.status === 200) {
            setPosts(response.data);
            console.log(posts);
        }
        setLoading(false);
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div className='home'>
            {!loading ? (
                <Posts posts={posts} errorMessage={errorMessage} />
            ) : (
                <Preloader />
            )}
            <button className='btn right'>Создать пост</button>
        </div>
    );
};
