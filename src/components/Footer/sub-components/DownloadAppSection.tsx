"use client"
import React from 'react';
import Link from 'next/link';
import { AppleStoreIcon, GooglePlayIcon } from "@/constants/icons.constant"

const DownloadAppSection: React.FC = () => {
    return (
        <div className=" space-y-4">
            <h3 className="font-semibold text-text-secondary text-base">Download App</h3>
            <div className="grid gap-3">
                <Link
                    href="https://play.google.com/store/apps/details?id=your.app.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex max-w-full w-[230px] items-center justify-start space-x-3 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors duration-200"
                >
                    <GooglePlayIcon />
                    <div className="flex flex-col text-left">
                        <span className="text-xs opacity-80">Get It On</span>
                        <span className="text-base font-medium">Google Play Store</span>
                    </div>
                </Link>
                <Link
                    href="https://apps.apple.com/us/app/your-app-name/id123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex  max-w-full w-[230px] items-center justify-start space-x-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                    <AppleStoreIcon />
                    <div className="flex flex-col text-left">
                        <span className="text-xs opacity-80">Download from</span>
                        <span className="text-base font-medium">Apple App Store</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DownloadAppSection;