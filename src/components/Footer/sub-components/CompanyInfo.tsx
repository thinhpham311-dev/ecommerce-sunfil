"use client"
import React from 'react';
import Image from 'next/image';

const CompanyInfo: React.FC = () => {
    return (
        <div className="flex flex-col space-y-4 ">
            <h3 className="font-semibold text-text-secondary text-lg">VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY</h3>
            <p className="text-text-secondary text-base">Tax code: <strong>03005094228</strong></p>
            <p className="text-text-secondary text-base">Address: <strong>10 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</strong></p>
            <p className="text-text-secondary text-base">Phone number: <a href="tel:02837607607" className="hover:underline"><strong>0283 760 7607</strong></a></p>
            <p className="text-text-secondary text-base">Opening hour: <strong>09:00 - 22:00 from Mon - Fri</strong></p>
            <div className="mt-4">
                <Image
                    src="/images/footer/bo-cong-thuong.png"
                    alt="Bộ Công Thương Logo"
                    width={150}
                    height={50}
                />
            </div>
        </div>
    );
};

export default CompanyInfo;