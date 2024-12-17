import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";




function Info() {
    return (
        <div className='mt-[90px]'>
            <Container>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6'>
                        <Title className={"text-[34px] font-semibold"}>More informations</Title>
                        <div className='mt-[42px] flex flex-col gap-[33px]'>
                            <p className='flex items-center gap-[10px] text-[#232323] text-[20px]'> <CiLocationOn />  See the menu</p>
                            <p className='flex items-center gap-[10px] text-[#232323] text-[20px]'> <CiLocationOn />  +847 87 37 29 01</p>
                            <p className='flex items-center gap-[10px] text-[#232323] text-[20px]'> <CiLocationOn />  Singapour, Bishan</p>
                            <p className='flex items-center gap-[10px] text-[#232323] text-[20px]'> <CiLocationOn /> 7j/7, 08:00 - 22:00 </p>
                            <p className='flex items-center gap-[10px] text-[#232323] text-[20px]'> <CiLocationOn /> www.bellaitalia.com </p>
                        </div>
                        <div className='flex gap-[17px] mt-[27px]'>
                            <FaFacebook size={"29px"} />
                            <AiFillInstagram size={"29px"} />
                            <IoLogoTiktok size={"29px"} />
                            <IoLogoWhatsapp size={"29px"} />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <img src="/images/map2.png" alt="" />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Info