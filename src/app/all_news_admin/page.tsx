import React from 'react'
import { image1, image2, image3 } from '../image'
import Image from 'next/image'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { BsThreeDots } from "react-icons/bs";


const AllNewsAdmin = () => {
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
        }
    ]
    return (
        <DefaultLayout>
            <section className='news mb-12' id='news' >
                <div className="container mx-auto px-2 lg:p-0">
                    <div className="flex justify-between border-b-2 border-gray-300 py-5  md:mx-0">
                        <h1 className='font-bold text-xl md:text-2xl' >Berita Terbaru</h1>
                    </div>
                    {/* hero 2 bottom*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                        {datahero3.map((item, index) => (
                            <div className='shadow-6 p-2 rounded-md' key={index}>
                                <Image className='w-full rounded-md' src={item.image} alt='news_btm' />
                                <p className='text-sm md:text-base' >{item.title}</p>
                                <button className='flex justify-end w-full' >
                                    <BsThreeDots size={25} />
                                </button>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}

export default AllNewsAdmin