import React from 'react'
import styles from './index.module.less'
import { Card, message } from 'antd'
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
    <span
      onClick={() => {
        if (router === '/') {
          return message.info('暂未开放')
        }
      }}
    >
      <Link to={router}>
        <Card className={styles.card} hoverable bordered={false}>
          <div className={styles.cardItem}>
            <img src={icon} alt={name} />
            <span className={`colorText`}>{name}</span>
          </div>
        </Card>
      </Link>
    </span>
  )
}
