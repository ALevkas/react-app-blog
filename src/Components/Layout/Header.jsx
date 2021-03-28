import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    React App Blog
                </Link>
            </div>
        </nav>
    );
};
