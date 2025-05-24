"use client";
import Link from "next/link";
import { MapPinIcon, ArrowRightIcon } from "@/constants/icons.constant"

const StoreLocatorBanner: React.FC = () => {
    return (
        <div className="bg-secondary py-4 px-6">
            <div className="container  flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className=" text-white rounded-md p-1.5">
                        <MapPinIcon />
                    </div>
                    <p className="text-black font-medium text-sm md:text-3xl">
                        Xem hệ thống 88 cửa hàng trên toàn quốc
                    </p>
                </div>
                <Link href="/store-locator" className="rounded-full flex items-center gap-x-3 bg-white text-blue-600 font-semibold text-sm md:text-base px-4 py-2 hover:bg-blue-100 transition-colors duration-200">
                    Xem ngay <ArrowRightIcon />
                </Link>
            </div>
        </div>
    );
};

export default StoreLocatorBanner