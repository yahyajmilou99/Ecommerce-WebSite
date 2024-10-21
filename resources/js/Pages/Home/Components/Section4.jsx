export default function Section4() {
    return (

        <>
            <section className="w-[100%] md:px-[8vw] px-[6vw] py-[3rem] ">
                <div className="bg-[#F8FAFC] rounded-[20px] w-[100%] md:px-[8vw] px-[6vw] py-[3rem] flex overflow-hidden ">
                    <div className="flex flex-col items-start gap-2 md:w-[50%] w-[100%] ">
                        <p className="text-[1.2rem] font-bold text-[#4B5563] ">100% Original Products</p>
                        <p className="md:text-[2.5rem] text-[2rem] font-bold ">The All New Fashion
                            Collection Items
                        </p>
                        <p className="text-[1.2rem] font-bold text-[#4B5563]">Starting from: $59.99</p>
                        <button className="bg-[#111827] text-white p-[0.7rem] px-[2.3rem] rounded-full mt-4 ">Shop now</button>
                    </div>
                    <img src="/images/model-green.png" className="w-[40%] scale-150 ml-[5rem] md:flex hidden object-contain" alt="" />
                </div>
            </section>
        </>

    )
}