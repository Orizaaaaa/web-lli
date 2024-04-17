import ButtonPrimary from '@/components/elements/buttonPrimary';
import Title from '@/components/fragemnts/title'
import { image1, image2, image3, news1 } from '@/app/image';
import Image from 'next/image';
import React from 'react'

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
            <div className="container mx-auto p-2 lg:p-0">

                {/* hero1 */}
                <div className="hero-1">
                    <Title title={'Berita Terbaru'} location={'#news'} />
                </div>

                {/* hero2 */}
                <div className="hero-2 mt-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-10 ">
                        <div className="col-span-3 ">
                            <Image className='w-full h-full object-cover' src={news1} alt="news" />
                        </div>

                        <div className="desc col-span-2 flex flex-col justify-between h-full">
                            <div className="flex flex-col ">
                                <h1 className='text-xl md:text-2xl font-medium' >Lorem Ipsum is simply dummy text of the.</h1>
                                <p className='mt-4 text-sm md:text-base mb-3' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <ButtonPrimary className='rounded-md w-full font-semibold' >
                                Buka Berita
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>

                {/* hero 3 bottom*/}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                    {datahero3.map((item, index) => (
                        <div key={index}>
                            <Image className='w-full' src={item.image} alt='news_btm' />
                            <p className='text-sm md:text-base' >{item.title}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default News