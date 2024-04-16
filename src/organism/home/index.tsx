import Navbar from '@/components/fragemnts/navbar'
import './home.scss'
import React from 'react'
import ButtonPrimary from '@/components/elements/buttonPrimary'


const Home = () => {
    return (
        <section className="home" id='home'>
            <Navbar />
            <div className="hero1 ">
                <div className="container mx-auto min-h-[80vh] mt-10 md:mt-[90px] flex flex-col justify-center gap-10 lg:gap-28 ">
                    <div className='p-5 md:0' >
                        <h1 className='font-bold text-2xl sm:text-4xl md:text-5xl text-white' >Lembaga Lansia Indonesia <br /> Jawa Barat</h1>
                        <p className='text-white text-sm lg:text-lg lg:w-3/6 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    </div>

                    <div className='p-5 md:0' >
                        <ButtonPrimary className='rounded-md'>Hubungi Kami</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home