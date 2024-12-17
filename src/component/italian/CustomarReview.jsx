import React, { useState } from 'react'
import Container from '../common/Container'
import { Button } from '@/components/ui/button'
import { PiSortDescending } from 'react-icons/pi'
import ReviewCard from './ReviewCard'
import restaurantList from '@/api/restaurantList'
import CommonBtn from '../common/CommonBtn'
import { Dialog } from '@/components/ui/dialog'
import { RxCross2 } from 'react-icons/rx'

function CustomarReview() {
    const [dialogState, setDialogState] = useState(false)
    return (
        <div className='mt-[34px] px-[20px] md:px-0'>
            <Container>
                <div className='relative flex gap-[38px] px-[20px] md:px-0'>
                    <Button className="flex items-center justify-center bg-transparent border text-black rounded-full hover:text-white">
                        <PiSortDescending />
                        Filter
                    </Button>

                    <Button onClick = {()=>setDialogState(true)} className="flex items-center justify-center bg-transparent border text-black rounded-full hover:text-white">
                        <PiSortDescending />
                        Sort
                    </Button>

                    <div className=' w-[276px] rounded-[15px] bg-white/75 shadow-lg absolute left-[10px]  top-[40px]'>
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

                <div className='flex flex-col gap-[27px] mt-[43px]'>
                    {
                        restaurantList.map((item, index) => (
                            <div key={index}>
                                <ReviewCard />
                            </div>
                        ))
                    }
                </div>

                <CommonBtn className={"flex mx-auto mt-[86px]"}>Show more reviews</CommonBtn>


            </Container>
        </div>
    )
}

export default CustomarReview