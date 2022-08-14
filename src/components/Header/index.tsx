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
import AntdImage from '../../components/Image'
export default function Header() {
  const location = useLocation()
  useHeaderUtils()

  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      <div className={styles.logo}>
        <AntdImage
          src="https://oss.lidakai.top/dlam.png"
          preview={false}
          height={'100%'}
          width={'auto'}
        />
        <span>哆啦B梦百宝箱</span>
      </div>
      <div className={styles.bars}>
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
    </div>
  )
}
