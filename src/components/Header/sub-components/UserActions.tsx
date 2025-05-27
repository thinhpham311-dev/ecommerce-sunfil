import React from 'react';
import Link from 'next/link';
import { FlatVNIcon } from '@/constants/icons.constant'; // Đảm bảo import HeartIcon
import DropdownCart from "./DropdownCart"
import DropdownUser from "./DropdownUser"

const UserActions = () => {
    return (
        <div className="flex items-center space-x-6">
            <Link href="/favorites" className="flex items-center gap-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                <FlatVNIcon />
                <span className="text-sm group-hover:underline">VI</span>
            </Link>

            <DropdownCart />
            <DropdownUser />
        </div>
    );
};

export default UserActions;