import React, { useState } from 'react'
import styles from './index.module.less'
import { DownloadOutlined } from '@ant-design/icons'
import { Input, Button, message } from 'antd'
import AntdImage from '../../components/Image'
import { invoke } from '@tauri-apps/api/tauri'
import { open } from '@tauri-apps/api/dialog'

message.config({
  top: 60,
  duration: 2,
  maxCount: 2,
  rtl: true
})

function getUrl(str: string) {
  const reg =
    /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  const strValue = str.match(reg)
  if (strValue && strValue.length > 0) {
    return strValue[0]
  }
  return null
}

interface DouyinDataType {
  title: string
  cover: string
  ratio: string
  url: string
  id: string
}

function Douyin() {
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState('')
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false)
  const [douyinData, setDouyin] = useState<DouyinDataType>({
    title: '',
    cover: '',
    ratio: '',
    url: '',
    id: ''
  })

  const getDouyinLink = async () => {
    const link = getUrl(value)
    if (!link) {
      message.error('请输入正确地址')
      return
    }
    setLoading(true)
    try {
      const id = await invoke('get_url_id', { addr: link })
      const info: DouyinDataType = await invoke('get_video_info_by_id', { id })
      setDouyin(info)
    } catch (err) {
      console.log(err)
      message.error('解析失败，请联系开发者修复')
    }
    setLoading(false)
  }

  return (
    <div className={styles.douyin}>
      <div className={styles.douyinBox}>
        <div className={styles.logo}>
          <h1 className={`colorText`}>抖音去水印</h1>
        </div>
        <div className={styles.search}>
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value.trim())
            }}
            placeholder="请粘贴抖音分享链接"
          />
          <br />
          <Button
            onClick={getDouyinLink}
            style={{ marginLeft: 10 }}
            type="primary"
            loading={loading}
          >
            搞起来
          </Button>
        </div>
      </div>
      <div className={styles.footer}>
        {douyinData.url ? (
          <div className={styles.video}>
            <div className={styles.mse}>
              <AntdImage preview={false} src={douyinData.cover} />
              <p>{douyinData.title}</p>
            </div>
            <Button
              onClick={async () => {
                const fileName = `${douyinData.title}${Date.now()}.mp4`
                const dir = await open({ directory: true })
                if (!dir) {
                  return
                }
                try {
                  setDownloadLoading(true)
                  const filePath = await invoke('download_video', {
                    url: douyinData.url,
                    writePath: dir,
                    fileName,
                    id: douyinData.id
                  })
                  console.log(filePath)
                  setDownloadLoading(false)
                  message.success(`下载成功`)
                } catch (error) {
                  message.error('下载失败')
                }
              }}
              // douyinData.originVideo
              type="primary"
              loading={downloadLoading}
              icon={<DownloadOutlined />}
              size={'large'}
            >
              Download
            </Button>
          </div>
        ) : (
          <div className={styles.tips}>
            {/* 提示性文案 */}
            <div className={styles.tip}>
              <p>WEB 抖音口令复制</p>
              <AntdImage
                height={200}
                src="http://oss.wanfengblog.com/0FBC19DC-6C4D-4f20-B2EA-FD225695548A.png"
              />
            </div>
            <div className={styles.tip}>
              <p>抖音 APP 口令复制</p>
              <AntdImage
                height={200}
                src="http://oss.wanfengblog.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220813211820.png"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Douyin
