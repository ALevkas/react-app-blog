import { useState } from 'react';
import './auth.scss';

import { registration } from '../../http/userApi';
import { Link } from 'react-router-dom';

export const Registration = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const sendForm = async () => {
        const response = await registration(username, password);
        if (response.status === 200) {
            props.handleToggle();
        }
    };

    return (
        <div className='registration__wrapper'>
            <div className='registration__title'>
                <h3>Зарегистрироваться</h3>
            </div>
            <div className='registration'>
                <div className='registration__form'>
                    <div className='input-field col'>
                        <input
                            id='username'
                            type='text'
                            className='validate'
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='Заполните поле'
                        />
                    </div>
                    <div className='input-field col'>
                        <input
                            id='password'
                            type='password'
                            className='validate'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Заполните поле'
                        />
                    </div>

                    <div className='submit__button'>
                        <button
                            className='waves-effect waves-light btn green'
                            onClick={() => sendForm()}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                    <div className='registration__login'>
                        <p>
                            Есть аккаунт?{' '}
                            <span
                                className='login'
                                onClick={() => {
                                    props.handleToggle();
                                }}
                            >
                                войти
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
