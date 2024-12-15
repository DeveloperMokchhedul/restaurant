import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import SliderData from '@/api/SliderData'
import Cart from '../common/Cart'
import CommonBtn from '../common/CommonBtn'

function Trend() {
    return (
        <div className='mt-[102px] '>
            <Container>
                <Title className={"font-extrabold"}>The latest trends</Title>
                <div className='grid grid-cols-12 gap-5 mt-[25px]'>
                    {
                        SliderData.map((data, index) => (
                            <div key={index} className='col-span-3 flex gap-5'>
                                <Cart />

                            </div>

                        ))
                    }

                </div>
                <div className=' text-center mt-[52px]'>
                    <Title className={"text-[22px]"}>Discover more cool restaurants</Title>
                    <CommonBtn className={"mt-[20px]"}>Show more</CommonBtn>
                </div>

            </Container>
        </div>
    )
}

export default Trend