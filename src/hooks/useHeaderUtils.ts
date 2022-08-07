import { useEffect } from 'react'
import { appWindow } from '@tauri-apps/api/window'

export default function useHeaderUtils() {
  useEffect(() => {
    const titlebarMinimize = document.getElementById(
      'titlebar-minimize'
    ) as HTMLButtonElement

    const titlebarMaximize = document.getElementById(
      'titlebar-maximize'
    ) as HTMLButtonElement

    const titlebarClos = document.getElementById(
      'titlebar-close'
    ) as HTMLButtonElement

    const minimize = function () {
      appWindow.minimize()
    }
    const toggleMaximize = function () {
      appWindow.toggleMaximize()
    }
    const close = function () {
      appWindow.close()
    }

    titlebarMinimize?.addEventListener('click', minimize)
    titlebarMaximize?.addEventListener('click', toggleMaximize)
    titlebarClos?.addEventListener('click', close)

    return () => {
      titlebarMinimize?.removeEventListener('click', minimize)
      titlebarMaximize?.removeEventListener('click', toggleMaximize)
      titlebarClos?.removeEventListener('click', close)
    }
  }, [])

  return null
}
