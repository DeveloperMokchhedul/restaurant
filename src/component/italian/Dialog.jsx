import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
    Dialog,

} from "@/components/ui/dialog"
import Cart from "../common/Cart"
import SliderData from "@/api/SliderData"
import { RxCross2 } from "react-icons/rx";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export function DialogImage({dialog, setDialog}) {
    return (
        <div className="  absolute -top-[100px] md:-top-[470px] left-0 right-0 md:left-[160px] md:right-[360px] bg-white md:py-[25px] md:pb-[34px] md:px-[29px] rounded-[20px]">
            <Dialog>
                <div className="relative">
                    <RxCross2 onClick={()=>setDialog(false)}  size={"25px"} className="p-[5px] absolute z-50 -right-[2px] md:-right-[40px] -top-[10px] md:-top-[40px] bg-white rounded-full cursor-pointer" />
                    <div className="">

                        <div className=''>
                            <Carousel className=" ">
                                <CarouselContent className="">
                                    {SliderData.map((_, index) => (
                                        <CarouselItem key={index} className="">
                                            <div className="">
                                                <img className="md:[993px]" src="/images/dialog1.png" alt="" />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent  >
                                <CarouselPrevious className=" absolute bottom-[120px]  -left-[10px]" />
                                <CarouselNext className=" absolute bottom-0  -right-[10px]" />
                            </Carousel>
                        </div>

                    </div>
                    <div className="mt-[22px]">
                        <img src="/images/dialog2.png" alt="" />

                    </div>
                </div>

            </Dialog>
        </div>

    )
}
