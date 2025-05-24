// components/Header/sub-components/SearchBar.js
import React from 'react';
import { Button, Input } from '@/components/ui';
import { SearchIcon, CameraIcon } from '@/constants/icons.constant';

const SearchBar = () => {
    return (
        <div className=" border-primary border-2 rounded-full overflow-hidden px-3">
            <form className='flex items-center  '>
                <Input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    variant='default'
                    size='xl'
                    className='border-none'
                />
                <Button type="button" variant='ghost'>
                    <CameraIcon />
                </Button>
                <Button type="submit" variant='primary' rounded='3xl'>
                    <SearchIcon />
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;