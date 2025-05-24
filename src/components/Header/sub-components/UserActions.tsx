import React from 'react';
import Link from 'next/link';
import { CartIcon, UserIcon, FlatVNIcon } from '@/constants/icons.constant'; // Đảm bảo import HeartIcon

const UserActions = () => {
    return (
        <div className="flex items-center space-x-6">
            <Link href="/favorites" className="flex items-center gap-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                <FlatVNIcon />
                <span className="text-sm group-hover:underline">VI</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                <CartIcon />
                <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span> {/* Giảm kích thước badge, vị trí linh hoạt hơn */}
                <span className="text-sm group-hover:underline">Giỏ hàng</span>
            </Link>
            <Link href="/account" className="flex items-center gap-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                <UserIcon />
                <span className="text-sm group-hover:underline">Tài khoản</span>
            </Link>
        </div>
    );
};

export default UserActions;