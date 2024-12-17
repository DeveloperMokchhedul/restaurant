import { useState } from "react";
import Title from "../common/Title";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
export function MenuDialog() {
    const [isOpen, setIsOpen] = useState(true); 

    return (
        <div>
            {isOpen && (
                <div className="absolute -top-[920px] inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

                    

                    <div className=" relative bg-white rounded-lg shadow-lg p-6 w-[60%]">
                    <RxCross2 onClick={()=>setIsOpen(false)} className="w-[43px] h-[43px] absolute -right-[50px] -top-[10px] rounded-full p-[5px] bg-white text-black" />
                        <img
                            src="/images/trend/menu.png"
                            alt="Downloadable"
                            className="w-full h-auto rounded-md mb-4"
                        />
                        <Title className={ "text-[16px] md:text-[32px] text-center my-[23px] font-semibold"}>Menu Bella Italia</Title>

                        {/* Download Button */}
                        <div className = " md:w-[255px] px-[27px] rounded-[24px] bg-white border-2  text-[#1677bd] hover:bg-white/50 mx-auto flex justify-center items-center">
                        <MdOutlineFileDownload  className="text-[16px] md:text-[30px]" />
                            <a
                                href="/images/trend/menu.png" 
                                download="download-image.jpg"
                                className="block w-full text-center px-4 py-2 text-[10fpx] md:text-[16px] "
                            >
                                Dowload this menu
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
