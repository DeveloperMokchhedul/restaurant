import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import SliderData from '@/api/SliderData'
import RecentCard from './RecentCard'
import recentActivitiesApi from '@/api/recentActivitiesApi'


function RecentSlider() {
    return (
        <>
            <div className=' relative '>
                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1 ">
                        {recentActivitiesApi.map((data, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <RecentCard name = {data.name} rating = {data.rating} date = {data.date} address = {data.location} des1 = {data.description1} des2  = {data.description2} img1 = {data.image.image1} img2 = {data.image.image2} img3 = {data.image.image3}/>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent  >
                    <CarouselPrevious className = " absolute  -left-[10px]" />
                    <CarouselNext className = " absolute  -right-[10px]"  />
                </Carousel>
            </div>

        </>
    )
}

export default RecentSlider