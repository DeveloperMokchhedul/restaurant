import React from 'react'
import Description from './Description'

function Cart() {
  return (
    <div className=' bg-[#F8F8F8] rounded-[14px]  '>
        <img className='w-full' src="/images/card3.png" alt="cart" />
        <div className='md:pl-[14px] py-[13px]'>
        <p className='font-roboto text-19px leading-[22.27px] font-semibold text-[#232323] '>Bottega</p>
        <Description>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>
        <p className='text-[14px] font-semibold font-roboto leading-[16.41px] pt-[24px] '>rating: 5.0 <span className='font-normal font-roboto text-[#7A7A7A]'>(876 reviews)</span></p>
        
        </div>
 
    </div>
  )
}

export default Cart