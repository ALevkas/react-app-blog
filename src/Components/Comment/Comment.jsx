import { useEffect, useState } from 'react';
import { Preloader } from '../Preloader/Preloader';

import { getComment } from '../../http/userApi';

export const Comment = (props) => {
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(true);

    const getInfoComment = async () => {
        const response = await getComment(props.commentId);
        if (response.status === 200) {
            setComment(response.data);
            if (props.isLast) {
                props.getLastValue(response.data.content);
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        getInfoComment();
    }, []);

    return (
        <>
            <div className='comment'>
                {!loading ? <> New Value: {comment.content} </> : <Preloader />}
            </div>
        </>
    );
};
