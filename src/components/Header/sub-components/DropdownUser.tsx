'use client';
import React from "react"
import { Dropdown, DropdownMenuItems, DropdownProvider, Button } from '@/components/ui';
import ProductCard from "./ProductCard"
import { UserIcon } from "@/constants/icons.constant"
import { PRODUCTS_DATA } from "@/mocks/data/product.data"

const DropdownUser = () => {
    return <>
        <DropdownProvider trigger="hover" placement="bottom-right">
            <Dropdown label={
                <Button variant="ghost" rounded="full" className="flex items-center gap-x-2  hover:text-primary transition-colors duration-200">
                    <UserIcon />
                    <span className="text-sm group-hover:underline">Tài khoản</span>
                </Button>
            }>
                <DropdownMenuItems>
                    <ProductCard item={PRODUCTS_DATA[0]} />
                </DropdownMenuItems>
            </Dropdown>
        </DropdownProvider>
    </>
}

export default DropdownUser