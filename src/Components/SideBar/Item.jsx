import React, { useState } from 'react'
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils";
import { Icon } from '@iconify/react';
import { useSpring, animated } from '@react-spring/web';


const Item = ({ icon, label, onClick, selected, collapsed, hasSubmenu, isSubitem, toggleSubmenu,isOpenMenu }) => {

    const itemVariants = cva(
        "flex justify-start items-center gap-2 p-2 w-full h-10 rounded-lg text-white  cursor-pointer ",
        {
            variants: {
                selected: {
                    true: "bg-orange-normal",
                    false: "hover:bg-gray-700"
                }
            },
            defaultVariants: {
                selected: false
            }
        }
    );

    const style = useSpring({
        opacity: collapsed ? 0 : 1,
        width: collapsed ? '0%' : '100%',
        config: { tension: 210, friction: 20 }
    });


    return (
        <div
            onClick={toggleSubmenu || onClick}
            className={cn(itemVariants({ selected }))}
        >

            <Icon icon={icon} width={22} height={22} className={`${isSubitem ? 'invisible' : ''} flex-shrink-0`} />

            <animated.p style={style} className="text-base ">
                {label}
            </animated.p>

            {hasSubmenu && <Icon icon='mdi:chevron-down' width={24} height={24} rotate={isOpenMenu ? 90 : 0} className="ml-auto" />}

        </div>
    )
}

export default Item
