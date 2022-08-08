import React from 'react'
import { classNames } from 'utils'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={classNames(`p-4`)}>{children}</div>
}
