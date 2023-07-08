import {  clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from 'moment';

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getWeekDays = (weekOffset = 0) => {
  moment.locale('en-gb');
  const weekStart = moment().startOf('isoWeek').add(weekOffset, 'weeks');

  return Array(7).fill().map((_, i) => {
      const day = moment(weekStart).add(i, 'days');
      return {
          date: day.format('YYYY-MM-DD'),  // new
          dayNumber: day.date(),
          dayText: day.format('ddd'),
      }
  });
}

export const getHours = () => {
  return Array(10).fill().map((_, i) => {
      return moment({ hour: 8 }).add(i, 'hours').format('HH:mm');
  });
};