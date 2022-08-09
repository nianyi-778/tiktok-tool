import React from 'react'
import { classNames } from 'utils'
export default function Menu({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className={classNames(`inline-grid w-28-fixed h-28-fixed bg-orange-600 text-center select-none`)}
    >
      <p>
        <img src={icon} alt={name} />
      </p>
      <span>{name}</span>
    </div>
  )
}
