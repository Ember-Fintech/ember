import { useState, useEffect, useRef } from "react"

const useCountdown = (countdown: number) => {
  const [countDown, setCountDown] = useState(countdown)
  const intervalRef = useRef<number>()

  // Function to restart the countdown
  const restart = () => {
    setCountDown(countdown)
  }

  if (countDown === 0) clearInterval(Number(intervalRef?.current))

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountDown((prevTime) => prevTime - 1000)
    }, 1000)

    return () => clearInterval(Number(intervalRef?.current))
  }, [])

  return { countDown, restart }
}

export default useCountdown
