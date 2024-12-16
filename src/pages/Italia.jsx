import Container from '@/component/common/Container'
import Description from '@/component/common/Description'
import Title from '@/component/common/Title'
import ImageGalary from '@/component/italian/ImageGalary';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

function Italia() {
    return (
        <div>
            <p className='my-[20px] ml-[95px]'>Home / BellaItalia</p>
            <div className='bg-[url("/images/hero.png")]  pt-[67px] relative'>
            <img src="/images/bellalogo.png" alt="" className='absolute -bottom-[70px] left-[45%]' />
                <Container>
                    <div className='w-[530px]'>
                        
                        <Title className={"text-[52px] font-semibold text-white "}>Bella italia</Title>
                        <p className='text-[14px] font-semibold font-roboto leading-[16.41px] text-white '>rating: 5.0 <span className='font-normal font-roboto text-white'>(876 reviews)</span></p>
                        <Description className={"text-white mt-[28px]"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</Description>

                        <div className='flex flex-col gap-[38px] mt-[66px] pb-[111px]'>
                            <p className='flex items-center gap-[10px] text-white'> <CiLocationOn />  Singapour, Bishan-Ang Mo Kio Park </p>
                            <p className='flex items-center gap-[10px] text-white'> <CiClock2 /> 7/7, 08:00 - 22:00 </p>
                        </div>
                    </div>
                </Container>
            </div>
            <ImageGalary />
        </div>
    )
}

export default Italia