// components/Header/sub-components/SearchBar.js
import React from 'react';
import { Button, Input } from '@/components/ui';
import { SearchIcon, CameraIcon } from '@/constants/icons.constant';

const SearchBar = () => {
    return (
        <div className=" border-primary border-2 rounded-full overflow-hidden p-1 ">
            <form className='flex items-center space-x-1'>
                <Input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    variant='default'
                    size='lg'
                    className='border-none'
                />
                <Button type="button" variant='ghost' size='lg' rounded='Full'>
                    <CameraIcon />
                </Button>
                <Button type="submit" variant='primary' size='lg' rounded='Full'>
                    <SearchIcon />
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;