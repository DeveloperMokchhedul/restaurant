import React from 'react'
import Container from './common/Container'
import CommonBtn from './common/CommonBtn'
import { CiGlobe } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
    return (
        <header className='border-b'>
            <Container>
                <nav className='flex justify-between pt-[46px] pb-[23px] items-center '>
                    {/* logo section */}
                    <div className=' text-start'>
                        <img className='w-[166px]' src="images/logo.png" alt="logo" />

                    </div>

                    {/* search section */}
                    <div className='border rounded-full w-[50%] py-[4px]'>
                        <div className='w-full flex justify-between items-center'>

                            <div className='w-full'>
                                <input className=' w-full ps-[23px] outline-none' type="text" placeholder='restaurant, hotel, service....' />
                            </div>

                            <div className='w-full flex items-center'>
                                <span>|</span>
                                <input className='ps-[20px] w-full outline-none' type="text" placeholder='Singapour...' />
                            </div>

                            <div className='pr-[5px] '>
                                <IoSearchOutline className='w-[43px] h-[43px] bg-bgPrimary p-[12px] rounded-full text-white flex justify-center items-center' />

                            </div>


                        </div>

                    </div>

                    {/* fitback button and link section */}
                    <div className=' text-end'>
                        <div className='flex gap-[13px] items-center'>
                            <CiGlobe size={"20px"} />
                            <CommonBtn className={"bg-[#1E1E1E]"}>MyFeedback for business</CommonBtn>
                        </div>

                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navbar