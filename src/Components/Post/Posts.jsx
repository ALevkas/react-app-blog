import { useState } from 'react';
import { NotFound } from '../NotFound/NotFound';
import { Post } from './Post';

export const Posts = (props) => {
    return (
        <div className='post'>
            {props.posts.length ? (
                props.posts.map((post) => {
                    return <Post key={post._id} {...post} />;
                })
            ) : (
                <NotFound
                    key={props.imdbID}
                    errorMessage={props.errorMessage}
                />
            )}
        </div>
    );
};
