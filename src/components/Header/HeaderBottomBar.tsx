import React from 'react';
import { Navigation } from '@/components/ui';
import CategoriesMenu from './sub-components/CategoriesMenu';
import { MAINMENU_DATA, SUPPORTMENU_DATA } from '@/data/navbarMenu.data';

const HeaderBottomBar = () => {
    return (
        <div className="bg-white w-full">
            <div className="container py-3 flex flex-wrap items-center justify-between gap-4">
                <div className="w-full md:w-auto flex justify-between items-center gap-3 md:gap-5">
                    <CategoriesMenu />
                </div>
                <div className="hidden md:flex flex-1 items-center justify-between gap-6">
                    <Navigation
                        links={MAINMENU_DATA}
                        linkClassName="font-normal text-base text-black hover:text-primary"
                    />
                    <Navigation
                        links={SUPPORTMENU_DATA}
                        linkClassName="font-bold text-base text-black hover:text-primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderBottomBar;
