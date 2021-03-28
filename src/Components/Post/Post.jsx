import { useState,useEffect } from 'react';
import { Comments } from '../Comment/Comments';

import './posts.scss';

import { Preloader } from '../Preloader/Preloader';

import { getComments } from '../../http/userApi';
import { createComment } from '../../http/userApi';


export const Post = (props) => {
    const [userValue, setUserValue] = useState();
    const [userAct, setUserAct] = useState();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastValue, setLastValue] = useState(null);

    const getLastValue = (value) => {
        setLastValue(value);
    }

    const getNewValue = () => {
        let newValue = null;
        if (userValue && userAct) {
            switch (userAct) {
                case '+':
                    newValue = lastValue + +userValue;
                    return newValue;
                case '-':
                    newValue = lastValue - +userValue;
                    return newValue;
                case '*':
                    newValue = lastValue * +userValue;
                    return newValue;
                case '/':
                    newValue = lastValue / +userValue;
                    return newValue;
            }
        }
    }

    const getAllComments = async () => {
        setLoading(true);
        const response = await getComments(props._id);
        if (response.status === 200) {
            setComments(response.data);
        }
        setLoading(false);
    };

    const createNewComment = async () => {
        const content = getNewValue();
        const response = await createComment(props._id, content);
        if (response.status === 200) {
           getAllComments();
        }
    };

    useEffect(()=>{getAllComments()}, [])

    return (
        <div className='card horizontal'>
            <div className='card-stacked'>
                <div className='card-content'>
                    <p>Title: {props.title}</p>
                    <p>Message: {props.content}</p>
                </div>
                <div className='card-action'>
                {
                    loading ? <Preloader /> : <Comments postId={props._id} comments={comments} getAllComments={getAllComments} getLastValue={getLastValue}/>
                }

                </div>
                <div className='card-action'>
                    <p> Последнее значение: {lastValue}, выберите действие и введите число, затем нажмите кнопку ответить</p>
                    <div className='input-field col s12'>
                        <select
                            className='browser-default'
                            onChange={(e) => setUserAct(e.target.value)}
                        >
                            <option value='' disabled selected>
                                Выберите действие
                            </option>
                            <option value='+'>+</option>
                            <option value='-'>-</option>
                            <option value='*'>*</option>
                            <option value='/'>/</option>
                        </select>
                    </div>
                    <div className='input-field col s6'>
                        <input
                            placeholder='Введите ваше число'
                            id='first_name'
                            type='number'
                            className='validate'
                            value={userValue}
                            onChange={(e) => setUserValue(e.target.value)}
                        />
                    </div>
                    <button className='btn right' onClick={()=> {createNewComment()}}>Ответить</button>
                </div>
            </div>
        </div>
    );
};
