import React, { useEffect } from 'react'
import styles from './index.module.less'
import { RollbackOutlined } from '@ant-design/icons'
import useHeaderUtils from '../../hooks/useHeaderUtils'
// import { useLocation } from 'react-router-dom'

export default function Header() {
  useHeaderUtils()
  // const location = useLocation()
  // useEffect(() => {
  //   console.log(location.pathname, 'navigate')
  // }, [location])

  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      <div
        className={styles.titlebarButton}
        onClick={() => {
          window.history.back()
        }}
      >
        <RollbackOutlined />
      </div>

      <div id="titlebar-minimize" className={styles.titlebarButton}>
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div className={styles.titlebarButton} id="titlebar-maximize">
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div className={styles.titlebarButton} id="titlebar-close">
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  )
}
