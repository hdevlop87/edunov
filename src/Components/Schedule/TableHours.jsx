import React from 'react';
import { Table, TableRow, TableCell } from './calendar.styled'
import { Icon } from '@iconify/react';

const TableHours = ({ hours, onPreviousWeekSelect, onNextWeekSelect }) => {
    return (
        <Table className='relative flex-none '>
            <thead>
                <TableRow>
                    <TableCell>
                        <div className='flex justify-center items-center w-full h-full gap-6 '>
                            <Icon className='cursor-pointer' width={28} height={28} icon="solar:alt-arrow-left-linear" onClick={onPreviousWeekSelect} />
                            <Icon className='cursor-pointer' width={28} height={28} icon="solar:alt-arrow-right-linear" onClick={onNextWeekSelect} />
                        </div>
                    </TableCell>
                </TableRow>
            </thead>
            <tbody>
                {hours.map((hour, i) => (
                    <TableRow key={i}>
                        <TableCell className='relative w-[100px]'>
                            <span className='absolute -top-[14px] transform -translate-x-1/2 text-center w-full text-base text-bold'>
                                {hour}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}

export default TableHours