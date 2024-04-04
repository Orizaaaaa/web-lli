import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import { bigLogo } from '@/app/image';
const About = () => {
    const informationData = [
        {
            icon: <IoLocationOutline />,
            text: 'Jl. Cipatat No. 12 Spanyol 16431'
        },
        {
            icon: <MdOutlineMail />,
            text: 'yokijati@gmail.com'
        },
        {
            icon: <FaWhatsapp />,
            text: '0895385744763'
        },
    ]
    const followMeData = [
        {
            icon: <MdOutlineMail />,
            text: 'yokijati@gmail.com'
        },
        {
            icon: <FaInstagram />,
            text: 'enigma.dex'
        },
    ]
    return (
        <section className="about bg-primary">
            <div className="container mx-auto py-10 px-3 md:px-0">
                <h1 className='my-7 text-white text-3xl font-medium' >Tentang Kami</h1>
                <h2 className='text-white' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</h2>
                <div className="grid grid-cols-2 mt-7">
                    <div className="information  space-y-2">
                        {informationData.map((item, index) => (
                            <div className="flex justify-start items-center gap-2 text-white" key={index}>
                                {item.icon}
                                <p className=' text-sm md:text-base' >{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="folow-me  space-y-2">
                        {followMeData.map((item, index) => (
                            <div className="flex justify-start items-center gap-2 text-white" key={index}>
                                {item.icon}
                                <p className='text-sm md:text-base' >{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </section>
    )
}

export default About