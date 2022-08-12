import React from 'react'
import styles from './index.module.less'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>
}
