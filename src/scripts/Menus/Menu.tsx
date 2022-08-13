import React from 'react'
import styles from './index.module.less'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

export default function Menu({
  name,
  icon,
  router = '/'
}: {
  router?: string
  name: string
  icon: string
}) {
  return (
    <Link to={router}>
      <Card
        className={styles.card}
        // style={{ background: themeColor }}
        hoverable
        bordered={false}
      >
        <div className={styles.cardItem}>
          <img src={icon} alt={name} />
          <span className={`colorText`}>{name}</span>
        </div>
      </Card>
    </Link>
  )
}
