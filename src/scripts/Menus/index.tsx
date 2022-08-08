import React from 'react'
import Menu from './Menu'
import { classNames } from 'utils'

const MenusConfig = [
  {
    name: 'Easyv',
    icon: 'https://easyv.assets.dtstack.com/homepage-pro/_next/static/media/logo-nav-white.9cb7f8f8.png?auto=format&fit=max&w=640'
  }
]

export default function Menus() {
  return (
    <div className={classNames(`grid grid-cols-3 gap-4`)}>
      {MenusConfig.map((menu) => (
        <Menu key={menu.name} {...menu} />
      ))}
    </div>
  )
}
