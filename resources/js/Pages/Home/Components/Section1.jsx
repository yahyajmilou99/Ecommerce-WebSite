import { Carousel } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbExchange, TbWorld } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";

export default function Section1() {
    return (

        <>
            <Carousel transition={{ duration: 1 }} className="h-[71vh] ">
                <div className="w-[100%] h-[100%] bg-[#F8FAFC] flex  ">
                    <div className=" lg:w-[50%] w-[100%]  flex items-center justify-end ">
                        <div className="flex flex-col lg:w-fit  w-[100%] items-start  gap-[10px] lg:pl-[8vw] lg:px-0 px-[25px]">
                            <p className="text-[20px] font-semibold text-[#4B5563] ">Starting from: $49.99</p>
                            <h3 className="lg:text-[55px] text-[45px] font-black ">
                                Exclusive collection
                                for everyone
                            </h3>
                            <button className="lg:px-[27px] px-[27px] lg:py-[14px] py-[14px] rounded-full  bg-[#111827] text-white flex items-center justify-center gap-1  ">
                                <p className="text-[14px]">Explore now</p>
                                <IoIosSearch className="  font-bold text-[25px] " />
                            </button>
                        </div>
                    </div>
                    <div className="w-[50%] h-[100%]  lg:flex items-center justify-center hidden">
                        <img className="object-fit h-[100%] " src="/images/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated.png" alt="" />
                    </div>
                </div>

                <div className="w-[100%] h-[100%] bg-[#F8FAFC] flex  ">
                    <div className="w-[50%] h-[100%]  lg:flex items-center justify-center hidden">
                        <img className="h-[100%] object-fit " src="/images/model-home.png" alt="" />
                    </div>
                    <div className=" lg:w-[50%] w-[100%]  flex items-center justify-end ">
                        <div className="flex flex-col lg:w-fit  w-[100%] items-start  gap-[10px] lg:pl-[8vw] lg:px-0 px-[25px]">
                            <p className="text-[20px] font-semibold text-[#4B5563] ">Starting from: $49.99</p>
                            <h3 className="lg:text-[55px] text-[45px] font-black ">
                                Exclusive collection
                                for everyone
                            </h3>
                            <button className="lg:px-[27px] px-[27px] lg:py-[14px] py-[14px] rounded-full  bg-[#111827] text-white flex items-center justify-center gap-1  ">
                                <p className="text-[14px]">Explore now</p>
                                <IoIosSearch className="  font-bold text-[25px] " />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] h-[100%] bg-[#F8FAFC] flex  ">
                    <div className=" lg:w-[50%] w-[100%]  flex items-center justify-end ">
                        <div className="flex flex-col lg:w-fit  w-[100%] items-start  gap-[10px] lg:pl-[8vw] lg:px-0 px-[25px]">
                            <p className="text-[20px] font-semibold text-[#4B5563] ">Starting from: $30.00</p>
                            <h3 className="lg:text-[55px] text-[45px] font-black ">
                                Exclusive collection
                                for everyone
                            </h3>
                            <button className="lg:px-[27px] px-[27px] lg:py-[14px] py-[14px] rounded-full  bg-[#111827] text-white flex items-center justify-center gap-1  ">
                                <p className="text-[14px]">Explore now</p>
                                <IoIosSearch className="  font-bold text-[25px] " />
                            </button>
                        </div>
                    </div>
                    <div className="w-[50%] h-[100%]  lg:flex items-center justify-center hidden">
                        <img className="object-fit h-[100%] " src="/images/model-kid.png" alt="" />
                    </div>
                </div>
            </Carousel>

            <div className="bg-white w-[100%] py-10 flex  items-center justify-center ">
                
                <div className="bg-[#FAFAFA] border-[1.5px] border-[#E5E7EB] rounded-[16px] overflow-hidden w-[92%]  flex md:flex-row flex-col items-center justify-between ">
                    
                    <div className="md:w-[24.9%] w-[80%] md:py-[18px] py-[10px] flex md:flex-row flex-col  items-center justify-center gap-3 text-white   ">
                        <LiaShippingFastSolid className="text-[25px] text-[#111827] " />
                        <div className="flex flex-col md:text-start text-center ">
                            <p className="font-black 2xl:text-[20px] lg:text-[16.5px] text-[14.5px] text-[#111827] ">Free shipping</p>
                            <p className="2xl:text-[18px] lg:text-[14px] text-[12px] text-[#4B5563] ">On Orders over $50.00</p>
                        </div>
                    </div>

                    <div className="w-[0.1%] md:py-[24px] py-[1px] md:px-0 px-[28px] bg-[#E5E7EB] "></div>

                    <div className="md:w-[24.9%] w-[80%] md:py-[18px] py-[10px] flex md:flex-row flex-col  items-center justify-center gap-3 text-white   ">
                        <TbExchange className="text-[25px] text-[#111827] " />
                        <div className="flex flex-col md:text-start text-center ">
                            <p className="font-black 2xl:text-[20px] lg:text-[16.5px] text-[14.5px] text-[#111827] ">Ver easy to return</p>
                            <p className="2xl:text-[18px] lg:text-[14px] text-[12px] text-[#4B5563] ">Just phone number</p>
                        </div>
                    </div>

                    <div className="w-[0.1%] md:py-[24px] py-[1px] md:px-0 px-[28px] bg-[#E5E7EB] "></div>

                    <div className="md:w-[24.9%] w-[80%] md:py-[18px] py-[10px] flex md:flex-row flex-col  items-center justify-center gap-3 text-white   ">
                        <TbWorld className="text-[25px] text-[#111827] " />
                        <div className="flex flex-col md:text-start text-center ">
                            <p className="font-black 2xl:text-[20px] lg:text-[16.5px] text-[14.5px] text-[#111827] ">Worldwide delivery</p>
                            <p className="2xl:text-[18px] lg:text-[14px] text-[12px] text-[#4B5563] ">Fast delivery worldwide</p>
                        </div>
                    </div>

                    <div className="w-[0.1%] md:py-[24px] py-[1px] md:px-0 px-[28px] bg-[#E5E7EB] "></div>

                    <div className="md:w-[24.9%] w-[80%] md:py-[18px] py-[10px] flex md:flex-row flex-col  items-center justify-center gap-3 text-white   ">
                        <RiRefund2Line className="text-[25px] text-[#111827] " />
                        <div className="flex flex-col md:text-start text-center ">
                            <p className="font-black 2xl:text-[20px] lg:text-[16.5px] text-[14.5px] text-[#111827] ">Refunds policy</p>
                            <p className="2xl:text-[18px] lg:text-[14px] text-[12px] text-[#4B5563] ">60 days return for any reason</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-[100%] py-[40px] px-[20px] md:px-[25px] lg:px-[100px] flex flex-col md:justify-start justify-center gap-7 ">
                <p className="text-[33px] font-bold ">Start exploring. <span className="text-[#4B5563]">Good things are waiting for you</span></p>
                <div className="flex md:flex-row flex-col justify-between  w-[100%] md:gap-0 gap-5   ">
                    <div className="border-[1.5px]  md:w-[calc(97%/3)] p-[10px] xl:p-[16px] flex justify-around items-center rounded-[15px] ">
                        <div className="">
                            <p className="2xl:text-[25px]  xl:text-[20px] lg:text-[18px] text-[16px] font-extrabold ">Men & Women</p>
                            <p className="2xl:text-[16px] lg:text-[12px] md:text-[10px] text-[12px] font-bold text-[#4B5563] ">Starting from $49.99</p>
                        </div>
                        <button className="flex bg-white hover:bg-[#111827] hover:text-white transition duration-300 items-center justify-center h-[fit-content] pl-[8px] p-[4.5px] text-[15px] gap-2  border-l-[2.8px] border-l-[#E5E7EB] font-bold text-[#4B5563]  ">Shop Now <GoArrowRight /></button>
                    </div>
                    <div className="border-[1.5px]  md:w-[calc(97%/3)] p-[10px] xl:p-[16px] flex justify-around items-center rounded-[15px] ">
                        <div className="">
                            <p className="2xl:text-[25px] xl:text-[20px] lg:text-[18px] text-[16px] font-extrabold ">For Kids</p>
                            <p className="2xl:text-[16px] lg:text-[12px] md:text-[10px] text-[12px] font-bold text-[#4B5563] ">Starting from $30</p>
                        </div>
                        <button className="flex bg-white hover:bg-[#111827] hover:text-white transition duration-300 items-center justify-center h-[fit-content] pl-[8px] p-[4.5px] text-[15px] gap-2  border-l-[2.8px] border-l-[#E5E7EB] font-bold text-[#4B5563]  ">Shop Now <GoArrowRight /></button>
                    </div>
                    <div className="border-[1.5px]  md:w-[calc(97%/3)] p-[10px] xl:p-[16px] flex items-center justify-around rounded-[15px] ">
                        <div className="">
                            <p className="2xl:text-[25px] xl:text-[20px] lg:text-[18px] text-[16px] font-extrabold ">Accessories</p>
                            <p className="2xl:text-[16px] lg:text-[12px] md:text-[10px] text-[12px] font-bold text-[#4B5563] ">Explore Accessories</p>
                        </div>
                        <button className="flex bg-white hover:bg-[#111827] hover:text-white transition duration-300 items-center justify-center h-[fit-content] pl-[8px] p-[4.5px] text-[15px] gap-2  border-l-[2.8px] border-l-[#E5E7EB] font-bold text-[#4B5563]  ">Shop Now <GoArrowRight /></button>
                    </div>
                </div>
            </div>

            {/* <div className="h-[120vh] "></div> */}
        </>

    )
}