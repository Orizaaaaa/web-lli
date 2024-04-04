import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'


const Galery = () => {
    return (
        <section className="galery">
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
            </div>
        </section>
    )
}

export default Galery