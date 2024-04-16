import { bigLogo } from '@/app/image'
import Image from 'next/image'
import React from 'react'


const Footer = () => {
    return (
        <section className="footer" id='footer'>
            <div className="container mx-auto flex justify-center items-center">
                <Image className='m-10' src={bigLogo} alt="logo" />
            </div>
            <div className="copy-right flex justify-center items-center bg-primaryred p-4">
                <p className='text-white text-sm md:text-base ' >© 2024 Lembaga Lansia Indonesia Jawa Barat. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer