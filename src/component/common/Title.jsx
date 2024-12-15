import { cn } from '@/lib/utils'
import React from 'react'

function Title({children, className}) {
  return (
    <>
    <h1 className={cn(`font-lexend text-[32px] leading-[40px]`, className)}>{children}</h1>

    </>
  )
}

export default Title