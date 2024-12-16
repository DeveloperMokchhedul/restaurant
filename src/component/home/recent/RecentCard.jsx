import Description from '@/component/common/Description'
import React from 'react'
import { LuUserRound } from "react-icons/lu";
function RecentCard() {
  return (
    <div className='bg-[#f8f8f8] mt-[24px] px-[12px] py-[24px] rounded-[14px]'>
        <div className='flex items-center gap-[12px]'>
            <LuUserRound size={"59px" } className='bg-white p-[12px] rounded-full' />
            <div>
                <p className='font-roboto font-bold text-[21px] leading-[25px] text-[#232323]'>Leslie sakho</p>
                <Description className={"text-[16.5px]"}>Canada, toronto</Description>
            </div>
        </div>
        
        <div className='flex gap-5 items-center mt-[23px] '>
            <p>ratin</p>
            <p className='font-roboto text-[14.5px] leading-[17px]'>01/10/2024</p>
        </div>

        <div>
            <Description className={"mt-[21px]"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>

            <Description className={"pt-[13px]"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>
        </div>

        <div className='flex gap-[12px] mt-[39px]'>
            <img src="/images/recent1.png" alt="" />
            <img src="/images/recent2.png" alt="" />
            <img src="/images/recent3.png" alt="" />
        </div>

        

    </div>
  )
}

export default RecentCard