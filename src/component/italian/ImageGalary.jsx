import React from 'react';
import Container from '../common/Container';
import Title from '../common/Title';
import Description from '../common/Description';

function ImageGalary() {
    return (
        <div className="mt-[148px]">
            <Container>
                <div className='w-[702px] pb-[40px]'>
                <Title className={'text-[34px] font-semibold'}>Discover our magnificent place in photos</Title>
                <Description className={"pr-[150px]"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</Description>
                </div>
               
                <div className="flex gap-[16px]">
                    <div>
                        <img src="/images/bella1.png" alt="Gallery Image 1" className="w-full object-cover" />
                    </div>
                    <div className="flex gap-[16px]">
                        <div className="flex flex-col gap-[16px]">
                            <img className="w-[269px] object-cover" src="/images/bella2.png" alt="Gallery Image 2" />
                            <img className="w-[269px] object-cover" src="/images/bella11.png" alt="Gallery Image 3" />
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <img className="w-[269px] object-cover" src="/images/bella3.png" alt="Gallery Image 4" />
                            <img className="w-[269px] object-cover" src="/images/bella5.png" alt="Gallery Image 5" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ImageGalary;
