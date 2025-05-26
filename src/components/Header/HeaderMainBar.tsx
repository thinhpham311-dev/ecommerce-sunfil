'use client';
import React from 'react';
import Logo from './sub-components/Logo';
import SearchBar from './sub-components/SearchBar';
import UserActions from './sub-components/UserActions';

const HeaderMainBar = () => {
    return (
        <div className="bg-white  shadow-sm">
            <div className="container  py-5  gap-x-10 flex justify-between items-center">
                <Logo />
                <div className="flex-1 w-full">
                    <SearchBar />
                </div>
                <UserActions />
            </div>
        </div>
    );
};

export default HeaderMainBar;