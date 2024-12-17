import React from 'react'
import Container from '../common/Container'
import { Button } from '@/components/ui/button'
import { PiSortDescending } from 'react-icons/pi'
import ReviewCard from './ReviewCard'
import restaurantList from '@/api/restaurantList'
import CommonBtn from '../common/CommonBtn'

function CustomarReview() {
    return (
        <div className='mt-[34px]'>
            <Container>
                <div className='flex gap-[38px]'>
                    <Button className="flex items-center justify-center bg-transparent border text-black rounded-full hover:text-white">
                        <PiSortDescending />
                        Filter
                    </Button>

                    <Button className="flex items-center justify-center bg-transparent border text-black rounded-full hover:text-white">
                        <PiSortDescending />
                        Sort
                    </Button>
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