import { newEvent } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { IoCalendarOutline } from "react-icons/io5";



const NewEvents = () => {

    const dataEvent = [
        {
            image: newEvent,
            date: '30 Maret 2024 16:40 - 18:00 WIB',
            title: 'Lorem Ipsum is simply dummy text of the.',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. tandard dummy text ever since the 1500s'
        },
        {
            image: newEvent,
            date: '30 Maret 2024 16:40 - 18:00 WIB',
            title: 'Lorem Ipsum is simply dummy text of the.',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. tandard dummy text ever since the 1500s'
        },
        {
            image: newEvent,
            date: '30 Maret 2024 16:40 - 18:00 WIB',
            title: 'Lorem Ipsum is simply dummy text of the.',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. tandard dummy text ever since the 1500s'
        },
    ]

    return (
        <section className="new-events" id='new-event'>
            <div className="container mx-auto">
                <div className="hero-1 mb-4">
                    <div className="flex justify-between border-b-2 border-gray-300 py-5 mb-4">
                        <h1 className='font-bold text-xl md:text-2xl' >Acara Terbaru</h1>
                        <button className="flex justify-center items-center gap-2">
                            <h2 className='font-medium text-xl md:text-2xl' >All</h2>
                            <FaArrowRight size={20} />
                        </button>
                    </div>

                    <div className="event-list p-3">
                        {dataEvent.map((item, index) => (
                            <div className="flex flex-col  md:flex md:flex-row justify-between gap-3 md:gap-7 my-3 md:my-7" key={index}>
                                <div className="w-full flex flex-col justify-center  bg-neutral-300 p-3 order-last">
                                    <div className="flex gap-2 items-center mb-4">
                                        <IoCalendarOutline size={20} />
                                        <h1>{item.date}</h1>
                                    </div>
                                    <h1 className='text-xl font-semibold' >{item.title}</h1>
                                    <h2 className='mt-5' >{item.desc}</h2>
                                </div>

                                <div className=' h-full w-full md:w-[300px] '>
                                    <Image className='w-full h-full object-cover ' src={newEvent} alt='newevent' />
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default NewEvents