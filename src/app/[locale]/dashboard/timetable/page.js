'use client';

import React from 'react';
import Schedule from '@/Components/Schedule';
import { getHours } from '@/lib/utils';


const MySchedule = () => {

  const hours = getHours();

  const events = [
    { date: '2023-07-03', start: '08:00', end: '10:00', description: '1AC A', color: 'green' },
    { date: '2023-07-04', start: '11:00', end: '12:00', description: 'TSC I', color: 'red' },
    { date: '2023-07-05', start: '09:00', end: '11:00', description: '2AC B', color: 'purple' },
    { date: '2023-07-06', start: '13:00', end: '15:30', description: '3AC', color: 'pink' },
    { date: '2023-07-07', start: '13:00', end: '17:00', description: '1Bac', color: 'yellow' },
  ];

  return (
    <div className='flex w-full h-full gap-4'>
      <Schedule
        events={events}
        hours={hours}
      />
    </div>
  );
};

export default MySchedule;