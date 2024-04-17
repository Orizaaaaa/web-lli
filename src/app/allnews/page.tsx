
import React from 'react'
import './index.scss'
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import { logo1, logo2 } from '../image';


const AllNews = () => {
    return (
        <section className="home" id='home'>
            <div className="flex justify-center items-center m-5 gap-5">
                <Image className='w-32 border-r-2 border-gray pr-4' src={logo1} alt="logo" />
                <Image className='w-13' src={logo2} alt="logo" />
            </div>
            <div className="hero1 ">
                <div className="container mx-auto min-h-[50vh]  flex flex-col justify-center  ">
                    <div className="input-search flex bg-white justify-between items-center py-3 px-2 rounded-md">
                        <input className='bg-transparent outline-none w-[100%] placeholder-black font-medium' type="text" placeholder='Search' />
                        <IoSearch size={25} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllNews