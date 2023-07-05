'use client';

import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {

  const events = [
    {
      title: 'achbna lik',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'fhad l3jab',
      start: new Date(),
      end: new Date(),
    },
    // Add more events...
  ];

  return (
    <div>
      <Calendar
      events={events}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
      />
    </div>
  )
}

export default MyCalendar