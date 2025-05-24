// components/Header/index.js
import React from 'react';
import HeaderTopBar from './HeaderTopBar';
import HeaderMainBar from './HeaderMainBar';
import HeaderBottomBar from './HeaderBottomBar';

const Header = () => {
    return (
        <header className="w-full">
            <HeaderTopBar />
            <HeaderMainBar />
            <HeaderBottomBar />
        </header>
    );
};

export default Header;