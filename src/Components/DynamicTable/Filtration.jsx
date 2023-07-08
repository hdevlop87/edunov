import React from 'react'
import Select from '../Select'
import { Button } from '../Button'
import { Icon } from '@iconify/react';

const Filtration = ({ selectOptions = [], showDownload = true, showAddItems = true, onSelectChange, onDownloadClick, onAddItemClick }) => {
    return (
        <div className='flex items-center justify-between gap-4 flex-wrap'>
            <div className='flex gap-4 items-center '>

                {selectOptions.map((option, index) => (
                    <Select
                        key={index}
                        className='w-48'
                        placeholder={option.placeholder}
                        options={option.options}
                        onChange={(value) => onSelectChange(value, index)}
                    />
                ))}
            </div>

            <div className='flex gap-4 items-center'>
                {showDownload && (
                    <Button variant="outline" size='md' onClick={onDownloadClick}>
                        <Icon icon='icon-park-outline:download-two' width={18} />
                        <p className='ml-2 text-base'>Download CSV</p>
                    </Button>
                )}

                {showAddItems && (
                    <Button size='md' onClick={onAddItemClick}>
                        <Icon icon='ic:baseline-add' width={18} />
                        <p className='ml-2 text-base'>Add Items</p>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default Filtration
