'use client'

import React from 'react';
import Image from 'next/image';

import teacher from '@/assets/img/intro/teacher.svg'
import student from '@/assets/img/intro/student.svg'
import school from '@/assets/img/intro/school.svg'
import training from '@/assets/img/intro/training.svg'
import logo from '@/assets/img/logo/logoColor.svg';
import { Icon } from '@iconify/react';

const Item = ({ item, image, isLast }) => (
    <div className={`flex justify-start items-center relative  overflow-hidden gap-2 p-3 cursor-pointer hover:bg-gray-200 active:bg-gray-300 ${!isLast ? 'border-b border-gray-200' : ''}`}>
        <Image src={image} width={64} alt={item} />
        <span className="ml-2 text-light-primary font-medium ">{item}</span>
        <div className="ml-auto">
            <Icon icon="ic:round-play-arrow" className="w-5 h-5 text-purple-normal" />
        </div>
    </div>
)


const ListButtons = () => {
    const items = [
        { name: "Adminstrator", img: training },
        { name: "School", img: school },
        { name: "Teachers", img: teacher },
        { name: "Students", img: student },

    ];
    return (
        <div className="flex flex-col  w-[386px] bg-white rounded-xl  ">
            {items.map((item, index) => (
                <Item key={index} item={item.name} image={item.img} isLast={index === items.length - 1} />
            ))}
        </div>
    );
}

const Intro = () => {
    return (
        <div className="h-full w-full flex flex-col gap-16 justify-center items-center">
            <Image
                priority
                src={logo}
                height={80}
                width={200}
                alt="Follow us on Twitter"
            />
            <ListButtons />
        </div>
    );
}

export default Intro;