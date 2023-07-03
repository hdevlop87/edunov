'use client'

import React, { useState } from 'react';
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "./select";
import { Icon } from '@iconify/react';


function DynamicSelector({ options, onChange, className, placeholder, icon }) {
    const [selectedOption, setSelectedOption] = useState(null);

    function handleOptionChange(value) {
        setSelectedOption(value);

        if (onChange) {
            onChange(value);
        }
    }

    return (
        <Select
            value={selectedOption}
            onValueChange={handleOptionChange}
        >
            <SelectTrigger className={`h-10 text-base  text-light-primary w-44 ${className}`}>
                <div className='flex gap-2'>
                    {icon && <Icon icon={icon} width={18} />}
                    {selectedOption || placeholder}
                </div>
            </SelectTrigger>

            <SelectContent side="top" className='bg-white'>
                {options.map((option) => (
                    <SelectItem key={option} value={option} className='text-base text-light-primary'>
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default DynamicSelector;