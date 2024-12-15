import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


import React from 'react'

function CommonBtn({children,className}) {
  return (
    <>
    
    <Button className = {cn(`bg-bgPrimary`,className)}>{children}</Button>

    </>
  )
}

export default CommonBtn