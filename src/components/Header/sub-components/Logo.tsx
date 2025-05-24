// components/Header/sub-components/Logo.js
import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center">
            <img
                src="/images/header/logo_sunfil.svg"
                alt="Your Company Logo"
                className="h-[111px] w-auto"
            />
        </div>
    );
};

export default Logo;