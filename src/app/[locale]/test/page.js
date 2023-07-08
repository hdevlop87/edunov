'use client'

import React from 'react'
import { getWeekDays,getHours } from '@/lib/utils'

const test = () => {

  let quarterHour=["00","15","30","45"]
  let times=[]
  for(var i = 1; i < 25; i++){
    for(var j = 0; j < 4; j++){
      times.push(i + ":" + quarterHour[j]);
    }
  }

  console.log(times);

  return (
    <div>tek;st</div>
  )
}

export default test