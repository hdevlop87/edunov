'use client'

import React from 'react'
import BadgeIcon from '@/Components/BadgeIcon';
import SearchBar from './SearchBar'
import Avatar from './Avatar'
import MyAvatar from '@/assets/img/Avatar.png'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const router = useRouter(); 
    const title = router.pathname; 

    return (
        <header className='flex navbar items-center h-14 w-full text-light-primary bg-white rounded-xl shadow-md px-4 gap-4 justify-between'>
            <h1 className='text-base'>{title}</h1>
            <div className='flex items-center gap-4'>
                <SearchBar />
                <div className='flex gap-4'>
                    <BadgeIcon icon="tabler:minimize" />
                    <BadgeIcon icon="eva:moon-outline" />
                    <BadgeIcon icon="ic:outline-mail" number={5} />
                    <BadgeIcon icon="bx:bell" number={2} color='orange' />
                    <BadgeIcon icon="ic:baseline-g-translate" />
                </div>
                <Avatar avatarUrl={MyAvatar} status='online' />
            </div>
        </header>
    )
}

export default Navbar