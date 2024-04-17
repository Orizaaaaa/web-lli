import { human1, logo1, logo2 } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const DetailNews = () => {
    return (
        <section className="detail-news" id='detail-news'>
            <div className="flex justify-center items-center m-3 md:m-5 gap-5">
                <Image className='md:w-32 w-24  border-r-2 border-[#929292] pr-4' src={logo1} alt="logo" />
                <Image className='md:w-13 w-9' src={logo2} alt="logo" />
            </div>

            <section className="detail-content container mx-auto mt-16">
                <div className="title-date">
                    <h1 className='font-bold text-xl md:text-2xl text-justify' >Calorie restriction in humans builds strong muscle and stimulates healthy aging genes</h1>
                    <h2 className='font-bold text-xl md:text-2xl text-justify mt-4 text-primaryred' >30 Maret 2024</h2>
                </div>

                <div className="author flex justify-between mt-3 border-y-2 border-[#929292] py-3 px-2">
                    <div className="profile flex gap-4">
                        <Image className='w-10 h-10' src={human1} alt='profile' />
                        <div className="name">
                            <h1 className='text-base'>Ahmad Zilong</h1>
                            <h2 className='text-primaryred text-sm' >Author</h2>
                        </div>
                    </div>

                    <div className="contact flex gap-4 justify-center items-center">
                        <RiFacebookBoxLine size={31} />
                        <FaWhatsapp size={31} />
                        <MdOutlineEmail size={31} />
                    </div>
                </div>


            </section>
        </section>
    )
}

export default DetailNews