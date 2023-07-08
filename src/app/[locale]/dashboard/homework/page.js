'use client'

import React from 'react'
import Select from '@/Components/Select'
import Input from '@/Components/input'
import { Button } from '@/Components/Buttons'
import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic'
import { DatePicker } from '@/Components/DatePicker'


const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const Dashboard = () => {

  const onAddItemClick = () => {
  }

  function generateTimeSlots() {
    const timeSlots = [];
    for (let i = 7; i < 19; i++) {
      for (let j = 0; j < 60; j += 30) {
        let period = i >= 12 ? 'PM' : 'AM';
        let hour = i > 12 ? i - 12 : (i === 0 ? 12 : i); // Convert to 12-hour format
        let minute = j === 0 ? '00' : j;

        if (i === 7 && j === 0) continue; // Skip 7:00, start from 7:30

        timeSlots.push(`${hour}:${minute} ${period}`);
      }
    }
    return timeSlots;
  }

  return (
    <>
      <header className='flex gap-4 flex-wrap'>
        <Select placeholder='Select class' options={["class1", "class2"]} />
        <Select placeholder='Select categories' options={[]} />
        <DatePicker />
        <Select placeholder='Start 8:00 AM' options={generateTimeSlots()} icon='icon-park-solid:time' />
        <Select placeholder='End 8:30 AM' options={generateTimeSlots()} icon='icon-park-solid:time' />
      </header>

      <div className='title'>
        <Input placeholder='Title ......' />
      </div>
      <main className='flex flex-col w-full h-full gap-4'>

        <div className='flex w-full flex-grow overflow-auto' style={{ maxHeight: 'calc(100vh - 280px)' }}>
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"

          />
        </div>

        <div className='flex w-full gap-4'>

          <Button size='sm' onClick={onAddItemClick} className='bg-purple-normal'>
            <Icon icon='ic:baseline-add' width={18} />
            <p className='ml-2 text-base'>Add New</p>
          </Button>

          <Button size='sm' onClick={onAddItemClick} className='bg-red-normal'>
            <Icon icon='ant-design:clear-outlined' width={18} />
            <p className='ml-2 text-base'>Clear All</p>
          </Button>

        </div>
      </main>

    </>
  )
}

export default Dashboard