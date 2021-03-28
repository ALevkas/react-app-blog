import { useEffect, useState } from 'react';

import { Comment } from './Comment';

export const Comments = (props) => {

    return (
        <div className='comments'>
            {props.comments.length
                ? props.comments.map((comment, idx) => {
                        const isLast = props.comments.length === idx + 1;

                        return (
                            <Comment key={comment}
                                commentId={comment}
                                getLastValue={props.getLastValue}
                                isLast={isLast}
                            />
                        );
                    })
            : null}
        </div>
    );
};
