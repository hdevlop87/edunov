'use client'

import React, { useRef, useState, useEffect } from 'react';

import { Button } from "@/Components/Buttons"
import { Input } from "@/Components/input"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/Popover"

export function PopoverDemo({ isOpen =true }) {
  return (
    <Popover open={isOpen} >
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
