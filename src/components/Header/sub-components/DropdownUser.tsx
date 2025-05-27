'use client';
import React from "react"
import { Dropdown, DropdownMenuItems, DropdownProvider, Button, Card, CardContent } from '@/components/ui';
import { UserIcon } from "@/constants/icons.constant"
import { USER_DATA } from "@/mocks/data/user.data"
import { IUser } from "@/interfaces/IUser";

const DropdownUser = () => {
    const profile: IUser = USER_DATA[0]
    return <>
        <DropdownProvider trigger="hover" placement="bottom-right">
            <Dropdown label={
                <Button variant="ghost" rounded="Full" size="lg" className="flex items-center gap-x-2  hover:text-primary transition-colors duration-200">
                    <UserIcon />
                    <span className="text-sm group-hover:underline">Tài khoản</span>
                </Button>}>
                <DropdownMenuItems>
                    <Card>
                        <CardContent className="p-0">
                            <p className="inline-flex space-x-2"><strong>Họ và tên:</strong> <span className="font-semibold">{profile.name}</span></p>
                            <p className="inline-flex space-x-2"><strong>Email:</strong> {profile.email}</p>
                        </CardContent>
                    </Card>
                </DropdownMenuItems>
            </Dropdown>
        </DropdownProvider>
    </>
}

export default DropdownUser