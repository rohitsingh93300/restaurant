import React from 'react'
import pizza from '../assets/pizza.webp'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
import time from '../assets/time.png'
import star from '../assets/star.png'
import staroutline from '../assets/star-outline.png'
import tomatocut from '../assets/tomatocut.png'
import cabbage from '../assets/cabbage.png'

const Hero = () => {
    return (
        <div className='bg-orange-50 h-[600px]'>
            <div className='flex lg:flex-row flex-col items-center justify-center p-5 lg:max-w-7xl mx-auto relative'>
                <div className='lg:w-1/2 lg:space-y-6  lg:px-10 relative z-10' >
                    <div className='flex gap-0 lg:gap-2 '>
                        <img src={playstore} alt="playstore" className='w-28 h-10' />
                        <img src={appstore} alt="appstore" className='w-28 h-10' />
                    </div>
                    <h1 className='text-4xl font-bold lg:text-6xl tracking-normal mt-4 lg:mt-0'><span className='text-red-500'>Delicious</span> Meals Delivered to Your Doorsteps.</h1>
                    <p className='text-sm text-gray-600 my-3'>Discover a world of culinary delights with our food delivery service. Enjoy fast, reliable delivery and a wide selection of mouthwatering dishes.</p>
                    <div className='flex gap-3'>
                        <button className='bg-red-500 px-3 z-10 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all'>Order Now</button>
                        <button className='bg-white px-3 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-white hover:scale-110 transition-all'>Contact Now</button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-[275px] relative'>
                    <img src={pizza} alt="pizza" className='mx-auto spin' />
                    <div className='bg-red-50 gap-1 text-lg flex border-red-200 border items-center absolute bottom-16 lg:right-14  px-4 py-2 rounded-full'>
                        <img src={time} alt="time" className='lg:w-12 lg:h-12 w-6' />
                        <p className='leading-4 text-sm font-semibold'>Super fast <br /> Delivery</p>
                    </div>
                    <div variant="outline" className='bg-red-50 leading-none flex flex-col gap-1 ext-lg px-4 py-2 border-red-200 border absolute top-10 right-36 rounded-full items-center'>
                        <p className='leading-4 text-sm font-semibold'>Good Rating</p>
                        <div className='flex'>
                            <img src={star} alt="star" width={15} height={15} />
                            <img src={star} alt="star" width={15} height={15} />
                            <img src={star} alt="star" width={15} height={15} />
                            <img src={star} alt="star" width={15} height={15} />
                            <img src={staroutline} alt="star" width={15} height={15} />
                        </div>
                    </div>
                    <div className='flex flex-col bg-red-50 border-red-200 border px-6 py-2 absolute top-32 left-44 lg:top-16 lg:left-24 rounded-full items-center '>
                        <h1 className='text-red-500 lg:text-2xl font-bold text-xl'>100+</h1>
                        <p className='text-sm font-semibold'>Restaurants</p>
                    </div>
                    <img src={tomatocut} alt="tomato" className='hidden lg:block absolute w-32 bottom-20 left-4' />
                </div>
                <img src={cabbage} alt="" className='absolute top-72 lg:top-[410px] left-5 w-20 lg:w-44 z-0' />
            </div>
        </div>
    )
}

export default Hero
