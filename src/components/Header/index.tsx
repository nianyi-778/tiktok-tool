import React from 'react'
import './index.css'
import useHeaderUtils from '../../hooks/useHeaderUtils'

export default function Header() {
  useHeaderUtils()

  return (
    <div
      data-tauri-drag-region
      className={'titlebar'}
    >
      <div id="titlebar-minimize" className={'titlebar-button'}>
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div className={'titlebar-button'} id="titlebar-maximize">
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div className={'titlebar-button'} id="titlebar-close">
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  )
}
