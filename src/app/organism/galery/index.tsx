import Title from '@/app/components/fragemnts/title'
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
        <section className="galery mb-24" id='galery'>
            <div className="container mx-auto">
                <div className="hero-1 mb-4">
                    <Title title={'Galeri'} location={'#galery'} />
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