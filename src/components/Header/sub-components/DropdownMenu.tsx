'use client';
import React from "react"
import { Dropdown, DropdownButton, DropdownMenuItems, DropdownProvider } from '@/components/ui';

interface IDropdownMenuProps {
    title?: string | React.ReactNode
    children: React.ReactNode
}

const DropdownMenu: React.FC<IDropdownMenuProps> = ({
    title,
    children
}) => {
    return <>
        <DropdownProvider trigger="hover" >
            <Dropdown label={
                <DropdownButton>
                    {title}
                </DropdownButton>
            }>
                <DropdownMenuItems>
                    {children}
                </DropdownMenuItems>
            </Dropdown>
        </DropdownProvider>
    </>
}

export default DropdownMenu