import React from 'react'
import { LuUserRound } from 'react-icons/lu'
import Title from '../common/Title'
import Description from '../common/Description'

function ReviewCard() {
  return (
    <div className='bg-[#f8f8f8] py-[21px] pl-[20px] rounded-[20px] w-full md:w-[1055px] flex md:flex-row flex-col gap-[9px]'>
      <LuUserRound size={"59px"} className='bg-white p-[12px] rounded-full md:w-[59px]' />
      <div>
        <Title className={"font-semibold"}>Ming Wei</Title>
        <Description>Singapore, Little india</Description>
        <div className='flex gap-3 mt-[14px]'>
          <img src="/images/fivestar.png" alt="" />
          <p>31/04/2023</p>
        </div>
        <Description className={"mt-[28px] md:max-w-[511px] pr-[10px]"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>
      </div>
    </div>
  )
}

export default ReviewCard