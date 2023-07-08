import React, { useRef, useState, useEffect } from 'react';
import { Table, TableRow, TableCell, TableH, Container } from './calendar.styled'
import { getWeekDays } from '@/lib/utils';
import TableHours from './TableHours'
import Event from './Event'
import { differenceInWeeks, startOfWeek, isToday, parseISO } from 'date-fns';
import { DatePicker } from '../DatePicker'
import { Button } from '../Buttons'
import {PopoverDemo} from './EventPopover'

const Schedule = ({ events, hours }) => {

   const cellRef = useRef();
   const [cellWidth, setCellWidth] = useState(0);
   const [weekOffset, setWeekOffset] = useState(0);
   const weekDays = getWeekDays(weekOffset);

   useEffect(() => {
      if (cellRef.current) {
         setCellWidth(cellRef.current.offsetWidth);
      }
      const resizeObserver = new ResizeObserver(entries => {
         if (!Array.isArray(entries) || !entries.length) {
            return;
         }
         setCellWidth(entries[0].target.offsetWidth);
      });
      if (cellRef.current) {
         resizeObserver.observe(cellRef.current);
      }
      return () => {
         if (cellRef.current) {
            resizeObserver.unobserve(cellRef.current);
         }
      }
   }, []);


   const weekDaysDates = weekDays.map(day => day.date);
   const currentWeekEvents = events.filter(event =>
      weekDaysDates.includes(event.date)
   );

   const handleDateChange = (date) => {
      const currentWeekStart = startOfWeek(new Date());
      const selectedWeekStart = startOfWeek(date);
      const weekDifference = differenceInWeeks(selectedWeekStart, currentWeekStart);
      setWeekOffset(weekDifference);
   };

   const handlePreviousWeekSelect = () => {
      setWeekOffset(weekOffset - 1);
   };

   const handleNextWeekSelect = () => {
      setWeekOffset(weekOffset + 1);
   };

   const handleEventClick = (eventDetails) => {
      console.log('Clicked event details:', eventDetails);
   };

   return (
      <div className='flex flex-col w-full h-full gap-4 bg-white '>

         <div className='flex gap-4'>
            <Button
               onClick={() => setWeekOffset(0)}
               variant={"outline"}
               className="w-auto flex justify-between text-left text-base text-light-primary">
               <span>Today</span>
            </Button>

            <DatePicker onChange={handleDateChange} />
         </div>

         <Container>
            {/* Table for hours column */}
            <TableHours hours={hours} onPreviousWeekSelect={handlePreviousWeekSelect} onNextWeekSelect={handleNextWeekSelect} />
            {/* Table for events column */}
            <div className='absolute w-full h-full top-[70px] left-[100px] '>
               {currentWeekEvents.map((event, i) => (
                  <Event
                     key={i}
                     weekDays={weekDays}
                     day={event.date}  // Note this change
                     start={event.start}
                     color={event.color}
                     end={event.end}
                     description={event.description}
                     hours={hours}
                     cellWidth={cellWidth}
                     onClick={handleEventClick}
                  />
               ))}
            </div>

            {/* Table for the rest of the schedule */}
            <Table className='flex-grow relative'>
               <thead>
                  <TableRow>
                     {weekDays.map((day, i) => {
                        const isCurrentDay = isToday(parseISO(day.date));
                        return (
                           <TableH
                              key={i}
                              $isToday={isCurrentDay}
                           >
                              {day.dayText}<br />{day.dayNumber}
                           </TableH>
                        )
                     })}
                  </TableRow>
               </thead>
               <tbody>
                  {hours.map((hour, i) => (
                     <TableRow key={i}>
                        {
                           weekDays.map((day, j) => {
                              return (
                                 <TableCell
                                    ref={cellRef}
                                    key={j}
                                    className={`border-[1px] border-gray-200 bg-white`}
                                 >
                                 </TableCell>
                              )
                           })
                        }
                     </TableRow>
                  ))}

               </tbody>

            </Table>

         </Container>
      </div>
   );
};

export default Schedule;
