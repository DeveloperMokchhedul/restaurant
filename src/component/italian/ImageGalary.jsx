import React from 'react'
import Container from '../common/Container'

function ImageGalary() {
    return (
        <div className='mt-[148px]'>
            <Container>
                <div className='grid-cols-12'>
                    <div className='col-span-6'>
                        <img src="/images/bella1.png" alt="" />

                    </div>
                    <div className='col-span-6'>
                        <div>
                            <img src="/images/bella2.png" alt="" />
                        </div>

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default ImageGalary