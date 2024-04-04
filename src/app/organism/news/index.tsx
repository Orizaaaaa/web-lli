import ButtonPrimary from '@/app/components/elements/buttonPrimary';
import { image1, image2, image3, news1 } from '@/app/image';
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const News = () => {
    const datahero3 = [
        {
            image: image1,
            title: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            image: image2,
            title: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            image: image3,
            title: 'Lorem Ipsum is simply dummy text of the.'
        },
    ]
    return (
        <section className='news mt-12 mb-12' id='news' >
            <div className="container mx-auto">

                {/* hero1 */}
                <div className="hero-1">
                    <div className="flex justify-between border-b-2 border-gray-300 py-5">
                        <h1 className='font-bold text-2xl' >Berita Terbaru</h1>
                        <button className="flex justify-center items-center gap-2">
                            <h2 className='font-medium text-2xl' >All</h2>
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* hero2 */}
                <div className="hero-2 mt-6">
                    <div className="grid grid-cols-5 gap-10">
                        <div className="col-span-3 ">
                            <Image className='w-full h-full object-cover' src={news1} alt="news" />
                        </div>

                        <div className="desc col-span-2 flex flex-col justify-between h-full">
                            <div className="flex flex-col ">
                                <h1 className='text-2xl font-medium' >Lorem Ipsum is simply dummy text of the.</h1>
                                <p className='mt-4' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <ButtonPrimary className='rounded-md w-full font-semibold' >
                                Buka Berita
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>

                {/* hero 3 bottom*/}
                <div className="grid grid-cols-3 gap-3 mt-3">
                    {datahero3.map((item, index) => (
                        <div key={index}>
                            <Image className='w-full h-full' src={item.image} alt='news_btm' />
                            <p>{item.title}</p>
                        </div>
                    ))}

                </div>


            </div>
        </section>
    )
}

export default News