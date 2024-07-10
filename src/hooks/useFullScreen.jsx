import { useState, useEffect } from 'react'

// Custom hook to handle full-screen functionality
const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullScreen(true)
        })
        .catch((err) => {
          console.error('Failed to enter full screen:', err)
        })
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullScreen(false)
        })
        .catch((err) => {
          console.error('Failed to exit full screen:', err)
        })
    }
  }

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  return { isFullScreen, toggleFullScreen }
}

export default useFullScreen
