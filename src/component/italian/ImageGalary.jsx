import React, { useState } from 'react';
import Container from '../common/Container';
import Title from '../common/Title';
import Description from '../common/Description';
import { Button } from '@/components/ui/button';
import CommonBtn from '../common/CommonBtn';
import { DialogImage } from './Dialog';
import { MenuDialog } from './MenuDialog';

function ImageGalary() {
    const [dialog, setDialog] = useState(false)


    const handleViewPhotos = () => {
        setDialog(true)
        console.log("hey welcome");

    }
    console.log("dialog is", dialog);

    return (
        <div className="mt-[70px] md:mt-[148px] relative px-[20px] md:px-0">
            <Container>
                <div className='md:w-[702px] pb-[10px] md:pb-[40px]'>
                    <Title className={'text-[25px] md:text-[34px] text-center md:text-start font-semibold'}>Discover our magnificent place in photos</Title>
                    <Description className={"md:pr-[150px] mt-[10px] md:mt-0"}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</Description>
                </div>


                <div className="flex gap-[16px]">
                    <div className='relative '>
                        <Button onClick={handleViewPhotos} className="bg-white text-black absolute bottom-[21px] left-[23px] hover:bg-white/75">View all photos (7)</Button>
                        <img src="/images/bella1.png" alt="Gallery Image 1" className="w-full object-cover" />
                    </div>

                    {
                        dialog && <DialogImage dialog={dialog} setDialog={setDialog} />
                    }
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


                <MenuDialog />
            </Container>
        </div>
    );
}

export default ImageGalary;
