'use client'
import * as React from "react"
import { Icon } from "@iconify/react";
import eyeIcon from '@iconify/icons-mdi/eye';
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const Input = React.forwardRef(
   ({ icon, className, type, variant, placeholder, onChange, value, ...props }, ref) => {

      const inputVariants = cva(
         "h-10 w-full text-light-primary flex justify-between items-center ",
         {
            variants: {
               variant: {
                  default: "px-4 py-1 rounded-7xl bg-dark-primary ",
                  outline: "rounded-md border border-input  px-3 py-2"
               }
            },
            defaultVariants: {
               variant: "outline",
            },
         }
      )

      return (
         <div
            type={type}
            className={cn(inputVariants({ variant, className }))}
            ref={ref}
            {...props}
         >
            <div className="flex items-center">
               <Icon icon={icon} width={18} className="mr-2" />
               <input
                  className="flex-grow placeholder:text-light-primary w-40 text-base text-left  bg-transparent focus:outline-none active:bg-transparent"
                  type={type}
                  placeholder={placeholder}
                  autoComplete="off"
                  onChange={onChange}
                  value={value}  // value prop added here
               />
            </div>
            {type === 'password' && <Icon icon={eyeIcon} width={18} />}
         </div>
      )
   }
)


export default Input
