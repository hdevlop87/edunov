import React from 'react'
import { Icon } from '@iconify/react';

const SearchBar = () => {
    return (
        <div className="flex justify-start items-center w-[200px] h-8 relative gap-2 px-4 py-2.5 rounded-[40px] bg-[#e8f6f8]">
            <Icon icon='bx:search-alt' width={24} />

            <p className=" text-sm text-center text-light-primary">
                Search here...
            </p>
        </div>
    )
}

export default SearchBar