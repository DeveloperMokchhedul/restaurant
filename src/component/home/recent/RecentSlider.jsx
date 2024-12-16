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


function RecentSlider() {
    return (
        <>
            <div className=' relative'>
                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1 ">
                        {SliderData.map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <RecentCard />
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