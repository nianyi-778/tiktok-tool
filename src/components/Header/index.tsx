import React from 'react'
import { classNames } from 'utils'
import useHeaderUtils from '../../hooks/useHeaderUtils'

export default function Header() {
  useHeaderUtils()
  const titlebarButton =
    'inline-flex w-60 h-full justify-center align-center hover:bg-gray-100'
  return (
    <div
      data-tauri-drag-region
      className={classNames(
        'h-36 fixed top-0 left-0 right-0 flex user-select-none justify-end'
      )}
    >
      <div id="titlebar-minimize" className={classNames(titlebarButton)}>
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div className={classNames(titlebarButton)} id="titlebar-maximize">
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div className={classNames(titlebarButton)} id="titlebar-close">
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  )
}
