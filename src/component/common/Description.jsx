import { cn } from '@/lib/utils'
import React from 'react'

function Description({children, className}) {
    return (
        <>
         <p className={cn(`font-roboto text-[14px] leading-[18.75px] text-[#8F8F8F]`,className)}>{children}</p>
        </>
    )
}

export default Description