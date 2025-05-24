import React from 'react';
import { HamberIcon } from "@/constants/icons.constant"
import { Button } from '@/components/shared';
import { Navigation } from '@/components/shared';
import { MAINMENU_DATA, SUPPORTMENU_DATA } from '@/data/navbarMenu.data';

const HeaderBottomBar = () => {
    return (
        <div className="bg-white ">
            <div className="container py-3 px-6 flex justify-between items-center mx-auto 2xl:gap-x-6 gap-x-3">
                <div className='flex items-center gap-x-5'>
                    <Button variant='primary' rounded='md' className='flex items-center gap-2'>
                        <HamberIcon />
                        <span className='text-base font-bold'>Danh mục Sản phẩm</span>
                    </Button>
                </div>
                <div className="hidden md:flex items-center flex-1  ">
                    <div className='flex items-center justify-between w-full'>
                        <Navigation links={MAINMENU_DATA} linkClassName='font-normal' />
                        <Navigation links={SUPPORTMENU_DATA} linkClassName="font-bold" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeaderBottomBar;