'use client'
import React from 'react'
import intro2 from "@/assets/img/intro2.png";

import Image from 'next/image';

const Page = ({ children }) => {
    return (
        <div className="flex justify-center items-center p-0 w-full h-full">

            <div className="flex w-2/5 h-full flex-col gap-4">
                {children}
            </div>

            <div className="w-3/5 h-full flex justify-center items-center">
                <Image
                    priority
                    src={intro2}
                    height={650}
                    width={750}
                    alt="Follow us on Twitter"
                />
            </div>

        </div>
    )
}

export default Page