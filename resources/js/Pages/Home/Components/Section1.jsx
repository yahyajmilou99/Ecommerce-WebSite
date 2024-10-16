import { Carousel } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";

export default function Section1() {
    return (

        <>
            <Carousel transition={{ duration: 1 }} autoplay={true} autoplayDelay={3000} loop={true} className="h-[71vh] ">
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

                    <div className="w-[50%]  lg:flex hidden">
                        <img className="object-contain" src="/images/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated.png" alt="" />
                    </div>
                </div>

                <div className="w-[100%] h-[100%] bg-red-400  ">

                </div>
                <div className="w-[100%] h-[100%] bg-red-300  ">

                </div>
            </Carousel>
            <div className="h-[120vh] "></div>
        </>

    )
}