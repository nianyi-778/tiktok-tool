import React from 'react'
import styles from './index.module.less'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

export default function Menu({
  name,
  icon,
  router = '/',
  themeColor
}: {
  themeColor: string
  router?: string
  name: string
  icon: string
}) {
  return (
    <Card
      className={styles.card}
      style={{ background: themeColor }}
      hoverable
      bordered={false}
    >
      <Link to={router}>
        <div className={styles.cardItem}>
          <img src={icon} alt={name} />
          <span className={styles.colorText}>{name}</span>
        </div>
      </Link>
    </Card>
  )
}
