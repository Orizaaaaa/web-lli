import Navbar from '@/app/components/fragemnts/navbar'
import { home_hero1, logo1 } from '@/app/image'
import './home.scss'
import React from 'react'
import ButtonPrimary from '@/app/components/elements/buttonPrimary'


const Home = () => {
    return (
        <section className="home" id='home'>
            <Navbar />
            <div className="hero1 ">
                <div className="container mx-auto min-h-[80vh] mt-32 flex flex-col justify-center gap-28 ">
                    <div>
                        <h1 className='font-bold text-5xl text-white' >Lembaga Lansia Indonesia </h1>
                        <h1 className='font-bold text-5xl text-white' >Jawa Barat</h1>
                        <p className='text-white lg:text-lg w-3/6 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    </div>

                    <div>
                        <ButtonPrimary className='rounded-md'>Hubungi Kami</ButtonPrimary>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Home