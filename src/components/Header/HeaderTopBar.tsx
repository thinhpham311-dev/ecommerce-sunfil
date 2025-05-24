import React from 'react';
import { SaleIcon } from "@/constants/icons.constant"
import { CONTACTMENU_DATA } from "@/data/navbarMenu.data"
import { Navigation } from '@/components/ui';

const HeaderTopBar = () => {
    return (
        <div className="bg-primary-gradient  ">
            <div className='container flex justify-between items-center py-2'>
                <div className="flex items-center space-x-2">
                    <SaleIcon />
                    <p className='text-xs text-white'>Nhập mã <span className='uppercase text-warning font-bold'>NEWBIE</span> giảm ngay 10% cho lần đầu mua hàng.</p>
                </div>

                <div className="flex items-center space-x-4">
                    <Navigation links={CONTACTMENU_DATA} linkClassName='text-white text-xs' />
                </div>
            </div>
        </div>
    );
};

export default HeaderTopBar;