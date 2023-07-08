import React from 'react';
import { EventDiv } from './calendar.styled'
import { Icon } from '@iconify/react';
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'; // import your Popover component

const Event = ({ start, end, description, hours, cellWidth, weekDays, day, onClick, color }) => {

   const HEIGHT_OF_ONE_HOUR = 70;
   const startHour = parseInt(start.split(':')[0], 10);
   const startMinute = parseInt(start.split(':')[1], 10);
   const endHour = parseInt(end.split(':')[0], 10);
   const endMinute = parseInt(end.split(':')[1], 10);

   const durationInHours = (endHour + endMinute / 60) - (startHour + startMinute / 60);

   const startOfDayHour = parseInt(hours[0].split(':')[0], 10);
   const startOfDayMinute = parseInt(hours[0].split(':')[1], 10);

   const top = ((startHour * 60 + startMinute) - (startOfDayHour * 60 + startOfDayMinute)) * (HEIGHT_OF_ONE_HOUR / 60);
   const height = durationInHours * HEIGHT_OF_ONE_HOUR;
   const width = cellWidth


   const dayIndex = weekDays.findIndex(weekDay => weekDay.date === day);
   const left = dayIndex * width;

   const handleClick = () => {
      onClick({ start, end, description, day });
   };

   const colorClasses = {
      red: 'bg-red-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      yellow: 'bg-yellow-600',
      pink: 'bg-pink-600',
   }

   return (
      <EventDiv
         top={top}
         height={height}
         width={width}
         left={left}
         onClick={handleClick}
         className={` rounded-xl text-white gap-1  ${colorClasses[color]}`}
      >
         <Popover>
            <PopoverTrigger className='flex flex-col justify-center items-center cursor-pointer w-full h-full '>
               <span className='text-lg font-semibold'>{description}</span>
               <div className='flex items-center gap-1 '>
                  <Icon icon={'icon-park-solid:time'} width={15} />
                  <span className='text-sm  font-semibold'>{start} - {end}</span>
               </div>
            </PopoverTrigger>
            <PopoverContent className='bg-white'>
               <div>
                  <h2>{description}</h2>
                  <p>Day: {day}</p>
                  <p>Start Time: {start}</p>
                  <p>End Time: {end}</p>
               </div>
            </PopoverContent>
         </Popover>
      </EventDiv>
   );
};

export default Event