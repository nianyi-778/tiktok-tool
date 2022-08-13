import React, { useEffect } from 'react'
import styles from './index.module.less'
import {
  RollbackOutlined,
  FullscreenOutlined,
  BorderOutlined,
  CloseOutlined,
  MinusOutlined
} from '@ant-design/icons'
import useHeaderUtils from '../../hooks/useHeaderUtils'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  useHeaderUtils()

  useEffect(() => {
    console.log(location.pathname, 'navigate')
  }, [location])

  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      {!/^\/$/.test(location.pathname) && (
        <div className={styles.titlebarButton} id="titlebar-back">
          <RollbackOutlined />
        </div>
      )}

      <div id="titlebar-minimize" className={styles.titlebarButton}>
        <MinusOutlined />
      </div>
      <div className={styles.titlebarButton} id="titlebar-maximize">
        {/* <FullscreenOutlined /> */}
        <BorderOutlined />
      </div>
      <div className={styles.titlebarButton} id="titlebar-close">
        <CloseOutlined />
      </div>
    </div>
  )
}
