import { useEffect, useState } from 'react';

import { getComments } from '../../http/userApi';
import { Preloader } from '../Preloader/Preloader';
import { Comment } from './Comment';

export const Comments = (props) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllComments = async () => {
        const response = await getComments(props.postId);
        if (response.status === 200) {
            setComments(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <div className='comments'>
            {!loading ? (
                <>
                    {comments.length
                        ? comments.map((comment) => {
                              return (
                                  <Comment key={comment} commentId={comment} />
                              );
                          })
                        : null}
                </>
            ) : (
                <Preloader />
            )}
        </div>
    );
};
