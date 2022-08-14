import React from 'react'
import Menus from 'scripts/Menus'
import { Space, Popover } from 'antd'
import { WechatOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import AntdImage from '../../components/Image'

function PopoverContent() {
  return (
    <AntdImage
      src="https://oss.lidakai.top/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220814000047.jpg"
      height={100}
    />
  )
}

function Home() {
  return (
    <div className="bg-white">
      <Menus />
      <div className={styles.tips}>
        <Space direction="horizontal">
          <Popover
            placement="left"
            content={<PopoverContent />}
            trigger="hover"
          >
            <div className={styles.icon}>
              <WechatOutlined />
            </div>
          </Popover>
        </Space>
      </div>
    </div>
  )
}

export default Home
