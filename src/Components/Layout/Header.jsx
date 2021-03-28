import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();

    const exitUser = () => {
        window.sessionStorage.removeItem('token');
        history.push('/auth');
    };

    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    React App Blog
                </Link>

                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/'>Главная</Link>
                    </li>
                    <li>
                        <Link to='/auth'>Войти</Link>
                    </li>
                    <li>
                        <a href='#' onClick={exitUser}>
                            Выйти
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/ALevkas/'>
                            My others app in github page.
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
