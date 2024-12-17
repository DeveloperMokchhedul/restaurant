import restaurantList from '@/api/restaurantList';
import Card from '@/component/bestRestaurant/Card';
import CommonBtn from '@/component/common/CommonBtn';
import Container from '@/component/common/Container'
import Title from '@/component/common/Title'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { CrossIcon } from 'lucide-react';


import React, { useState } from 'react'
import { FaCross } from 'react-icons/fa';
import { PiSortDescending } from "react-icons/pi";
import { RxCross2 } from 'react-icons/rx';

function BestRestaurant() {
    const [dialogState, setDialogState] = useState(false)
    return (
        <div className='px-[20px] md:px-0'>
            <Container>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-6 mt-[20px]'>
                        <p>Home/All Restaurant</p>
                        <div className='flex items-center gap-[30px] relative '>
                            <Title className={"font-extrabold text-[20px] md:text-[32px] pt-[11px]"}>best restaurants in singapore</Title>
                            <Button onClick = {()=>setDialogState(true)} className="flex items-center justify-center bg-transparent border text-black rounded-full hover:text-white">
                                <PiSortDescending />
                                Sort
                            </Button>
                            <div className=' w-[276px] rounded-[15px] bg-white/75 shadow-lg absolute right-[40px] top-[60px]'>
                            <div>
                                {
                                    dialogState && <RxCross2  onClick = {()=>setDialogState(false)}  className='cursor-pointer absolute right-[10px] top-[10px] text-[33px] bg-[#d9d9d9] rounded-full p-[5px]' />
                                }

                            </div>
                                <Dialog>
                                    {
                                        dialogState && 
                                        <div className='flex flex-col py-[27px] gap-[10px] w-[150px]'>
                                        <Button className = "bg-white ml-[12px] text-[17px] bg-[#B0C2FF21] text-[#2146c7] shadow-none hover:bg-[#B0C2FF21]">All feedbacks</Button>
                                        <Button className = "bg-white text-[#5d5d5d] ml-[12px] text-[17px] hover:bg-[#B0C2FF21] shadow-none hover:text-[#2146c7]">Highest rated</Button>
                                        <Button className = "bg-white text-[#5d5d5d] ml-[12px] text-[17px] hover:bg-[#B0C2FF21] shadow-none hover:text-[#2146c7]">oldest rated</Button>
                                     
                                        </div>
                                    }

                           

                                </Dialog>

                            </div>
                        </div>

                        <div className='flex flex-col py-[34px] '>

                            {
                                restaurantList.map((item, index) => (

                                    <div key={index} className='border-b-2 py-[34px]'>
                                        <Card />
                                    </div>

                                )

                                )
                            }
                        </div>

                        <CommonBtn className="mx-auto md:mx-0 md:ml-0 mb-[20px] md:mb-0 flex md:justify-start">
                            Show more
                        </CommonBtn>


                    </div>

                    <div className='col-span-12 md:col-span-6'>
                        <img src="/images/map.png" alt="" />
                    </div>
                </div>


            </Container>

        </div>
    )
}

export default BestRestaurant