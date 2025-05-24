"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/shared';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-text-secondary p-4 sm:p-6 lg:p-8">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 lg:p-16 text-center max-w-lg w-full">
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold text-primary-base mb-4 animate-bounce">
                    404
                </h1>
                <p className="text-3xl font-semibold text-text-secondary mb-4">
                    Oops! Page Not Found
                </p>
                <p className="text-base sm:text-lg text-text-secondary mb-8">
                    Trang bạn đang tìm kiếm có thể đã bị xóa, đã đổi tên hoặc tạm thời không khả dụng.
                </p>
                <Link href="/" passHref>
                    <Button
                        variant='primary'
                        aria-label="Go to homepage"
                    >
                        Quay về trang chủ
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
