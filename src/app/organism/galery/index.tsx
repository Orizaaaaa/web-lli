import { galeri1, galeri2, galeri3 } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'


const Galery = () => {
    const datalistGalery = [
        {
            image: galeri1
        },
        {
            image: galeri2
        },
        {
            image: galeri3
        },
        {
            image: galeri1
        },
        {
            image: galeri2
        },
        {
            image: galeri3
        },
    ]
    return (
        <section className="galery mb-24">
            <div className="container mx-auto">
                <div className="hero-1 mb-4">
                    <div className="flex justify-between border-b-2 border-gray-300 py-5 mb-4">
                        <h1 className='font-bold text-xl md:text-2xl' >Galeri</h1>
                        <button className="flex justify-center items-center gap-2">
                            <h2 className='font-medium text-xl md:text-2xl' >All</h2>
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="hero-2">
                    <div className="list-galery">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 p-2 md:p-0">
                            {datalistGalery.map((item, index) => (
                                <Image key={index} className='object-cover h-full w-full' src={item.image} alt='galery' />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galery