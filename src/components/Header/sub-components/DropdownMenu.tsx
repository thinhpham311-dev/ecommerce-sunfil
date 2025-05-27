'use client';
import React from "react"
import { Dropdown, DropdownButton, DropdownMenuItems, DropdownProvider } from '@/components/ui';
import { CATEGORY_DATA } from "@/mocks/data/category.data"
import ProductGrid from './ProductGrid';
import CategoriesMenu from './CategoriesMenu';
import { HamberIcon } from "@/constants/icons.constant"

const DropdownMenu = () => {
    return <>
        <DropdownProvider trigger="click" >
            <Dropdown label={
                <DropdownButton>
                    <div className="flex items-center gap-2">
                        <HamberIcon />
                        <span className="text-base font-bold whitespace-nowrap"> Danh mục Sản phẩm </span>
                    </div>
                </DropdownButton>
            }>
                <DropdownMenuItems>
                    <CategoriesMenu categories={CATEGORY_DATA} >
                        <ProductGrid />
                    </CategoriesMenu>
                </DropdownMenuItems>
            </Dropdown>
        </DropdownProvider>
    </>
}

export default DropdownMenu