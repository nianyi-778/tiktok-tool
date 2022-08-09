import React from 'react'
import { classNames } from 'utils'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={classNames(`p-4 fixed instet-x-0 top-[calc(36px)] bottom-0 h-[calc(100vh-36px)]`)}>{children}</div>
}
