import { useState } from 'react';
import { Login } from './Login';
import { Registration } from './Registration';

const getTokenUser = () => {
    const token = window.sessionStorage.getItem('token');

    return token ? token : null;
};

export const Auth = () => {
    const [toggleShow, setToggleShow] = useState(true);

    const handleToggle = () => {
        setToggleShow(!toggleShow);
    };

    return (
        <div className='auth'>
            {toggleShow ? (
                <Registration handleToggle={handleToggle} />
            ) : (
                <Login handleToggle={handleToggle} />
            )}
        </div>
    );
};
