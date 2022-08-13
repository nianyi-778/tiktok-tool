import { useEffect } from 'react'
import { appWindow } from '@tauri-apps/api/window'
import { useNavigate } from 'react-router-dom'

export default function useHeaderUtils() {
  const navigate = useNavigate()
  useEffect(() => {
    const titlebarBack = document.getElementById(
      'titlebar-back'
    ) as HTMLButtonElement
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
    const back = function () {
      navigate('/', { replace: true })
    }

    titlebarMinimize?.addEventListener('click', minimize)
    titlebarMaximize?.addEventListener('click', toggleMaximize)
    titlebarClos?.addEventListener('click', close)
    titlebarBack?.addEventListener('click', back)
    return () => {
      titlebarMinimize?.removeEventListener('click', minimize)
      titlebarMaximize?.removeEventListener('click', toggleMaximize)
      titlebarClos?.removeEventListener('click', close)
      titlebarBack?.removeEventListener('click', back)
    }
  }, [navigate])

  return null
}
