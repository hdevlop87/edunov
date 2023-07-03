import React from 'react'
import Image from 'next/image';

const AvatarCol = ({ srcImg }) => {

    return (
        <div
            className="flex flex-col justify-start items-center relative overflow-hidden gap-4 px-5 py-4 rounded-2xl "
        >
            <div className="flex justify-center items-center relative">
                <div className=" w-[72px] h-[72px]">
                    <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute "
                        preserveAspectRatio="none"
                    >
                        <circle cx="36" cy="36" r="36" fill="#6F5CE0"></circle>
                    </svg>

                    <Image
                        className="absolute left-[5px] top-[4.5px] object-cover"
                        priority
                        src={srcImg}
                        height={64}
                        width={64}
                        alt="select user"
                    />
                </div>
            </div>
            <p className=" text-base font-semibold text-left text-[#767690]">Teacher</p>
        </div>
    )
}

export { AvatarCol }