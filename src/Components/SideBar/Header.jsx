import React from 'react'
import logoOpen from '@/assets/img/logo/logoOpen.svg'
import logoClose from '@/assets/img/logo/logoClose.svg'
import Image from 'next/image'
import { Icon } from '@iconify/react';

const Header = ({ isOpen, onClick }) => {
    return (
        <div className="flex w-full p-4 justify-center items-center relative">
            <div className={`absolute top-4 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={logoClose}
                    alt="logoClose"
                    width={40}
                    height={40}
                />
            </div>
            <div className={`absolute top-4 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    src={logoOpen}
                    alt="logoOpen"
                    width={130}
                    height={40}
                />
            </div>

            <div className="absolute right-[-9px] top-[24px]">
                <Icon icon='bxs:chevron-right-circle' width={24} rotate={isOpen ? 90 : 0} color='orange' onClick={onClick} />
            </div>
        </div>
    )
}

export default Header
