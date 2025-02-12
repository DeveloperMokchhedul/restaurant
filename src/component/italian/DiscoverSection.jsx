
import React from 'react'
import Cart from '../common/Cart'
import Container from '../common/Container'
import Title from '../common/Title'

import SliderData from '@/api/SliderData'

function DiscoverSection() {
    return (
        <div className='mt-[42px] px-[20px] md:px-0'>
            <Container>
                <Title className={"font-extrabold pb-[45px]"}>Also discover...</Title>
                <div className='grid grid-cols-12 md:gap-[49px]'>
                    {
                        SliderData.slice(0, 3).map((item, index) => (
                            <div key={index} className='col-span-12 md:col-span-4'>
                                <Cart image={item.image} title = {item.title} description={item.description} rating={item.rating} review={item.review}  />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default DiscoverSection