import { useState } from 'react';
import { Login } from './Login';
import { Registration } from './Registration';

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
