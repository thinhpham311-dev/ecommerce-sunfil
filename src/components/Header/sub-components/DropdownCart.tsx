'use client';
import React from "react"
import { Dropdown, DropdownMenuItems, DropdownProvider, Button } from '@/components/ui';
import ProductCard from "./ProductCard"
import { CartIcon } from "@/constants/icons.constant"
import { PRODUCTS_DATA } from "@/mocks/data/product.data"

const DropdownCart = () => {
    return <>
        <DropdownProvider trigger="hover" placement="bottom-left">
            <Dropdown label={
                <Button variant="ghost" rounded="Full" size="lg" className="flex items-center gap-x-2  hover:text-primary transition-colors duration-200">
                    <div className="relative aspect-square">
                        <CartIcon />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
                    </div>
                    <span className="text-sm group-hover:underline">Giỏ hàng</span>
                </Button>
            }>
                <DropdownMenuItems>
                    <ProductCard item={PRODUCTS_DATA[0]} />
                </DropdownMenuItems>
            </Dropdown>
        </DropdownProvider>
    </>
}

export default DropdownCart