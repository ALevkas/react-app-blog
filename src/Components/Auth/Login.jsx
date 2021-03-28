import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './auth.scss';

import { login } from '../../http/userApi';

export const Login = (props) => {
    const history = useHistory();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const sendForm = async () => {
        const response = await login(username, password);
        if (response.status === 200) {
            window.sessionStorage.setItem('token', response.data.token);
            history.push('/home');
        }
    };

    return (
        <div className='registration__wrapper'>
            <div className='registration__title'>
                <h3>Войти в блог</h3>
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
                            Войти
                        </button>
                    </div>
                    <div className='registration__login'>
                        <p>
                            Нет аккаунта?{' '}
                            <span
                                className='login'
                                onClick={() => {
                                    props.handleToggle();
                                }}
                            >
                                зарегистрироваться
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
