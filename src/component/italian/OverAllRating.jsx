import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import { ProgressBar } from './ProgressBar'

function OverAllRating() {
    return (
        <div className='mt-[56px] '>
            <Container>
                <div className='flex flex-col md:flex-row gap-[52px] items-center border-y-2 py-[56px] px-[20px] md:px-0'>
                    <div className='flex items-start'>
                        <img className='w-[48px] h-[48px] ' src="/images/staricon.png" alt="" />
                        <div className='ml-[15px]'>
                            <Title>Overall rating</Title>
                            <p className='text-[17px] font-roboto'>834 Reviews</p>
                            <img className='mt-[18px]' src="/images/fivestar.png" alt="" />
                        </div>
                    </div>

                    <div className='w-[330px] md:w-[549px] flex flex-col '>
                        <div className='flex gap-[10px] items-center'>
                            <p className='text-[17px] font-roboto text-[#484848]'>5star</p>
                            <ProgressBar progressdata={100} />
                        </div>

                        <div className='flex gap-[10px] items-center'>
                            <p className='text-[17px] font-roboto text-[#484848]'>4star</p>
                            <ProgressBar progressdata={80} />
                        </div>          
                        
                        <div className='flex gap-[10px] items-center'>
                            <p className='text-[17px] font-roboto text-[#484848]'>3star</p>
                            <ProgressBar progressdata={60} />
                        </div>  

                         <div className='flex gap-[10px] items-center'>
                            <p className='text-[17px] font-roboto text-[#484848]'>2star</p>
                            <ProgressBar progressdata={40} />
                        </div>

                        <div className='flex gap-[10px] items-center'>
                            <p className='text-[17px] font-roboto text-[#484848]'>1star</p>
                            <ProgressBar progressdata={20} />
                        </div>
                        
                        


                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OverAllRating