import { useState } from 'react';
import { Comments } from '../Comment/Comments';

import './posts.scss';

export const Post = (props) => {
    return (
        <div className='card horizontal'>
            <div className='card-stacked'>
                <div className='card-content'>
                    <p>Title: {props.title}</p>
                    <p>Message: {props.content}</p>
                </div>
                <div className='card-action'>
                    <Comments postId={props._id} />
                </div>
                <div className='card-action'>
                    <button className='btn right'>Ответить</button>
                </div>
            </div>
        </div>
    );
};
