import React from 'react'
import Description from '../common/Description'

function Card() {
    return (
        <div className='w-[504px]' >
            <div className='flex items-center gap-[15px]'>
                <img src="/images/best1.png" alt="" />
                <div className='flex flex-col gap-[11px]'>
                    <p className='font-roboto font-semibold text-[22px] leading-[25px]'>The snug</p>
                    <Description>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>
                    <p className='text-[14px] font-semibold font-roboto leading-[16.41px]'>rating: 5.0 <span className='font-normal font-roboto text-[#7A7A7A]'>(876 reviews)</span></p>
                </div>
            </div>

        </div>
    )
}

export default Card