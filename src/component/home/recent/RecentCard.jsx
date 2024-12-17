import Description from '@/component/common/Description'
import React from 'react'
import { LuUserRound } from "react-icons/lu";
function RecentCard({ name, address, rating, date, des1, des2, img1, img2, img3 }) {
    return (
        <div className='bg-[#f8f8f8] mt-[24px] px-[12px] py-[24px] rounded-[14px]'>
            <div className='flex items-center gap-[12px]'>
                <LuUserRound size={"59px"} className='bg-white p-[12px] rounded-full' />
                <div>
                    <p className='font-roboto font-bold text-[21px] leading-[25px] text-[#232323]'>{name}</p>
                    <Description className={"text-[16.5px]"}>{address}</Description>
                </div>
            </div>

            <div className='flex gap-5 items-center mt-[23px] '>
                <div className="flex items-center text-[16px] pt-[24px]">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`${index + 1 <= Math.floor(rating) ? "text-[#ffc107]" : "text-[#e4e5e9]"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                    <p className="ml-2 text-[14px] font-semibold font-roboto leading-[16.41px]">
                        {rating}.0 <span className="font-normal text-[#7A7A7A]">{date}</span>
                    </p>
                </div>
            </div>

            <div>
                <Description className={"mt-[21px]"}>{des1} </Description>

                <Description className={"pt-[13px]"}>{des2}</Description>
            </div>

            <div className='flex gap-[12px] mt-[39px]'>
                <img className='w-[118px] h-[118px]' src={img1} alt="" />
                <img src={img2}alt="" />
                <img src={img3}alt="" />
            </div>

            <p className='underline mt-[20px]'>Discover</p>



        </div>
    )
}

export default RecentCard