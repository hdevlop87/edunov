"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { CaretSortIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/Button"
import { Calendar } from "@/Components/Calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/Popover"

export function DatePicker({ onChange }) {
    const [date, setDate] = React.useState()

    const handleDateChange = (newDate) => {
        setDate(newDate);
        onChange(newDate);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"outline"} className={cn("w-48 flex justify-between text-left text-base text-light-primary")}>
                    <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4 " />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </div>
                    <CaretSortIcon className="text-light-secondary" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto text-base bg-gray-100 p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    
                />
            </PopoverContent>
        </Popover>
    )
}
