import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card'
import SliderData from '@/api/SliderData'
import Cart from '../common/Cart'
import Title from '../common/Title'


function Slider() {
    return (
        <>
            <div className='bg-bgPrimary py-[20px] rounded-[9px] relative px-[20px]'>
                <Title className={"text-white pb-[31px]"}>Find the best restaurant ratings below</Title>
                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1">
                        {SliderData.map((_, index) => (
                            <CarouselItem key={index} className="pl-1  md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Cart />

                                    {/* <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card> */}
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

export default Slider