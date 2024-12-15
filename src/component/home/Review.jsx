import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import CommonBtn from '../common/CommonBtn'

function Review() {
  return (
    <div className='bg-[#F2F2F2] py-[26px] px-[181px] mt-[84px] grid grid-cols-12 items-center '>
        <div className='col-span-6 w-[502px]'>
            <Title className={"text-[26px] font-extrabold leading-[32.5px]"}>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</Title>
            <Description className={"text-[16px] pr-[50px] pt-[28px]"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>
            <CommonBtn className={"bg-[#1e1e1e] mt-[63px]"}>Explore MyFeedback business</CommonBtn>

        </div>
        <div className='col-span-6'>
            <img src="/images/feedback.png" alt="" />
        </div>

    </div>
  )
}

export default Review