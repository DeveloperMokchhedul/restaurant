import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


import React from 'react'

function CommonBtn({children,className}) {
  return (
    <>
    
    <Button className = {cn(`bg-bgPrimary rounded-[23.5px] px-[28px] py-[14px] text-[15.5px]`,className)}>{children}</Button>

    </>
  )
}

export default CommonBtn