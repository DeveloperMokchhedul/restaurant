import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import SliderData from '@/api/SliderData'
import Cart from '../common/Cart'
import CommonBtn from '../common/CommonBtn'
import trendApiData from '@/api/trendApiData'

function Trend() {
    return (
        <div className='mt-[102px] px-[20px] md:px-[0px] '>
            <Container>
                <Title className={"font-extrabold"}>The latest trends</Title>
                <div className='grid grid-cols-12 gap-5 mt-[25px]'>
                    {
                        trendApiData.map((data, index) => (
                            <div key={index} className='col-span-12 md:col-span-3 flex gap-5'>
                                <Cart title = {data.title} description = {data.description} image = {data.image} rating = {data.rating} review = {data.review}  />

                            </div>

                        ))
                    }

                </div>
                <div className=' text-center mt-[52px] mb-[30px] md:mb-0'>
                    <Title className={"text-[22px]"}>Discover more cool restaurants</Title>
                    <CommonBtn className={"mt-[20px]"}>Show more</CommonBtn>
                </div>

            </Container>
        </div>
    )
}

export default Trend