import React from 'react';
import { Icon } from '@iconify/react';

function BadgeIcon({ icon, number, color }) {

  const colorClass = color ? `bg-${color}-normal` : 'bg-red-normal';

  return (
    <div className="relative h-6">
      {number &&
        <div className={`${colorClass} absolute -top-2 -right-2 text-xs w-4 h-4 rounded-full flex items-center justify-center text-white`}>
          {number}
        </div>
      }
      <Icon icon={icon} width={24} />
    </div>
  )
}

export default BadgeIcon;