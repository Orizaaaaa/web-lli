
import React from 'react'
import './index.scss'
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import { image1, image2, image3, logo1, logo2, news1 } from '../image';
import ButtonPrimary from '@/components/elements/buttonPrimary';
import About from '@/organism/about';
import Footer from '@/organism/footer';
import Link from 'next/link';


const AllNews = () => {

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
        <>
            <section className="home" id='home'>
                <div className="flex justify-center items-center m-3 md:m-5 gap-5">
                    <Image className='md:w-32 w-24  border-r-2 border-gray pr-4' src={logo1} alt="logo" />
                    <Image className='md:w-13 w-9' src={logo2} alt="logo" />
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

            <section className='news mt-12 mb-12' id='news' >
                <div className="container mx-auto px-2 lg:p-0">
                    <div className="flex justify-between border-b-2 border-gray-300 py-5  md:mx-0">
                        <h1 className='font-bold text-xl md:text-2xl' >Berita Terbaru</h1>
                    </div>
                    {/* hero1 */}
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

                    {/* hero 2 bottom*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                        {datahero3.map((item, index) => (
                            <div key={index}>
                                <Link href='/all_news/detail_news'>
                                    <Image className='w-full' src={item.image} alt='news_btm' />
                                    <p className='text-sm md:text-base' >{item.title}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <About />
            <Footer />

        </>
    )
}

export default AllNews