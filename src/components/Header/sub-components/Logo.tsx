import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center">
            <Image
                src="/images/header/logo_sunfil.svg"
                alt="Your Company Logo"
                width={250}
                height={111}
            />
        </div>
    );
};

export default Logo;