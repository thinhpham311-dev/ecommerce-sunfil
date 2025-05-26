'use client';
import React from 'react';
import { PRODUCTS_DATA } from "@/data/product.data"
import { Navigation, Card, CardHeader, CardContent, Button } from '@/components/ui';
import CategoriesMenu from './sub-components/CategoriesMenu';
import DropdownMenu from "./sub-components/DropdownMenu"
import { HamberIcon, DoubleAltRightIcon } from "@/constants/icons.constant";
import { MAINMENU_DATA, SUPPORTMENU_DATA } from '@/data/navbarMenu.data';
import { CATEGORY_DATA } from "@/data/category.data"
import ProductHeader from '../Product/ProductHeader';
import ProductGrid from '../Product/ProductGrid';

const HeaderBottomBar = () => {
    return (
        <div className="bg-white w-full">
            <div className="container py-3 flex flex-wrap items-center justify-between gap-4">
                <div className="w-full md:w-auto flex justify-between items-center gap-3 md:gap-5">
                    <DropdownMenu title={<div className="flex items-center gap-2">
                        <HamberIcon /> <span className="text-base font-bold whitespace-nowrap"> Danh mục Sản phẩm </span></div>}>
                        <CategoriesMenu categories={CATEGORY_DATA} >
                            <Card>
                                <CardHeader>
                                    <ProductHeader title="Sản phẩm bán chạy">
                                        <Button variant='ghost' className='inline-flex items-center space-x-2'>
                                            <span className='text-primary font-base'>
                                                Xem tất cả
                                            </span>
                                            <span><DoubleAltRightIcon strokeWidth={0.25} /></span>
                                        </Button>
                                    </ProductHeader>
                                </CardHeader>
                                <CardContent>
                                    <ProductGrid products={PRODUCTS_DATA.slice(0, 5)} columns={{ base: 2, md: 5, lg: 5, '2xl': 6 }} />
                                </CardContent>
                            </Card>
                        </CategoriesMenu>
                    </DropdownMenu>
                </div>
                <div className="hidden md:flex flex-1 flex-wrap items-center justify-between gap-6">
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
