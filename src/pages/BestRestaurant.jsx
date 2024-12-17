import restaurantList from '@/api/restaurantList';
import Card from '@/component/bestRestaurant/Card';
import CommonBtn from '@/component/common/CommonBtn';
import Container from '@/component/common/Container'
import Title from '@/component/common/Title'
import { Button } from '@/components/ui/button'

import React from 'react'
import { PiSortDescending } from "react-icons/pi";

function BestRestaurant() {
    return (
        <div className='px-[20px] md:px-0'>
            <Container>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-6 mt-[20px]'>
                        <p>Home/All Restaurant</p>
                        <div className='flex items-center gap-[30px]'>
                            <Title className={"font-extrabold pt-[11px]"}>best restaurants in singapore</Title>
                            <Button className="flex items-center justify-center bg-transparent border text-black rounded-full hover:text-white">
                                <PiSortDescending />
                                Sort
                            </Button>
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