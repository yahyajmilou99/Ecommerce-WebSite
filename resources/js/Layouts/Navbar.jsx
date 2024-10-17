import { Link } from "@inertiajs/react";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import "./app.css"

export default function Navbar({ children }) {

    // ? For the search icon
    const [inputValue, setInputValue] = useState('');

    // ? For the Responsive navbar
    const [respNav, setRespNav] = useState(false);


    return (

        <>
            <nav className="flex fixed z-[60] h-[9vh] md:h-[10vh] w-[100%] bg-white  lg:py-[14px] py-[14px]  lg:px-[75px] px-[10px] items-center lg:justify-between justify-around transition duration-300">
                <Link href="/" className="lg:text-[30px] text-[12px] ">ECOM</Link>
                <div className="lg:w-[40%] w-[65%]  relative">
                    {inputValue == "" ? <IoIosSearch className="absolute left-[2%] text-[#4B5563] font-bold text-[20px] top-[50%] translate-y-[-50%] " /> : <></>}
                    <input placeholder="      Search in products..." className="bg-[#F8F8F8] w-[100%] lg:h-auto h-[6vh] rounded-full lg:placeholder:text-[15px] placeholder:text-[12px] placeholder:font-light placeholder:text-[#4B5563] border-none " type="text"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value)
                        }
                        }
                    />
                </div>
                <div className="lg:flex hidden lg:text-[2vw] text-[#4B5563] text-[24px] gap-3  ">
                    <CiUser />
                    <span className="relative">
                        <CiShoppingCart />
                        <div className="bg-[#0EA5E9] h-[13px] w-[13px] rounded-full absolute -top-[3px] -right-0.5 text-[8px] flex items-center justify-center font-semibold ">99</div>
                    </span>
                </div>

                {/*! From Uiverse.io by JulanDeAlb */}
                <label className="hamburger lg:hidden flex">
                    <input type="checkbox"
                        onClick={() => {
                            setRespNav(!respNav)
                            document.body.classList.toggle("overflow-hidden")
                        }}
                    />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>

                {/* responsive nav */}

            <div className={respNav ? `absolute w-[80%] bg-[#000000]  top-[50vh] rounded-[30px] translate-y-[-50%] h-[70vh] lg:hidden flex flex-col items-center justify-center gap-[10px] z-50 important opacity-100 transition duration-500` : `absolute w-[80%] bg-[#F8F8F8] top-[50%] rounded-[30px] translate-y-[50%] h-[60vh] lg:hidden flex flex-col items-center justify-center gap-[10px] opacity-0 transition duration-500`}>
                <div className="w-[60%] relative">
                    <button className="p-[8px] w-[100%] rounded-[10px] bg-white border-[1.35px] border-black ">Cart</button>
                    <div className="bg-[#0EA5E9] h-[15px] w-[15px] rounded-full absolute -top-[3px] -right-0.5 text-[10px] flex items-center justify-center font-semibold ">0</div>
                </div>
                <button className="p-[8px] w-[60%] rounded-[10px] bg-white border-[1.35px] border-black ">Login</button>
            </div>
            </nav>
            <div className="h-[10vh]"></div>

            <main>
                {children}
            </main>
        </>

    )
}