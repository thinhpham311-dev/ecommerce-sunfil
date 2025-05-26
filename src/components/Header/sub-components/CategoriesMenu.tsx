import React from "react"
import { HamberIcon } from "@/constants/icons.constant";
import { Dropdown, DropdownButton, DropdownMenu, DropdownProvider } from '@/components/ui';
const CategoriesMenu = () => {
    return <>
        <DropdownProvider trigger="hover" >
            <Dropdown label={
                <DropdownButton>
                    <div className="flex items-center gap-2" >
                        <HamberIcon />
                        <span className="text-base font-bold whitespace-nowrap"> Danh mục Sản phẩm </span>
                    </div>
                </DropdownButton>
            }>
                <DropdownMenu>
                    <div className="lg:w-[1410px] mx-auto container">
                        <div className="grid 2xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 grid-cols-1 md:gap-y-10 gap-y-5 gap-x-5">
                            <div className="2xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1">
                                Menu Taxomimies
                            </div>
                            <div className="2xl:col-span-10 lg:col-span-8 md:col-span-6 col-span-1 grid gap-5">
                                Menu Categories
                            </div>
                        </div>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </DropdownProvider>
    </>
}

export default CategoriesMenu