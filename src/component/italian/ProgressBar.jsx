"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressBar({progressdata}) {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressdata), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress
      value={progress}
      className="w-[100%] [&>div]:bg-bgPrimary bg-gray-200"
    />
  )
}
