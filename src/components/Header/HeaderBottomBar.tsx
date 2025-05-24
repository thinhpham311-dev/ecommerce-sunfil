import React from 'react';
import { HamberIcon, DownIcon } from "@/constants/icons.constant";
import { Button } from '@/components/shared';
import { Navigation } from '@/components/shared';
import { MAINMENU_DATA, SUPPORTMENU_DATA } from '@/data/navbarMenu.data';

const HeaderBottomBar = () => {
    return (
        <div className="bg-white w-full">
            <div className="container py-3 flex flex-wrap items-center justify-between gap-4">
                <div className='w-full md:w-auto flex justify-between items-center gap-3 md:gap-5'>
                    <Button
                        variant='primary'
                        rounded='md'
                        className='flex items-center gap-2 w-full md:w-auto justify-center md:justify-start'
                    >
                        <HamberIcon />
                        <span className='text-base font-bold whitespace-nowrap'>Danh mục Sản phẩm</span>
                        <DownIcon />
                    </Button>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-between gap-6">
                    <Navigation links={MAINMENU_DATA} linkClassName='font-normal text-base text-black hover:text-primary' />
                    <Navigation links={SUPPORTMENU_DATA} linkClassName="font-bold text-base text-black hover:text-primary" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBottomBar;
