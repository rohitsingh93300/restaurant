import React from 'react'
import chef from '../assets/Chefcook.json'
import Lottie from 'lottie-react'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const KeyFeatures = () => {
    return (
        <div className='bg-orange-50 py-10 px-4 lg:px-0 lg:py-20'>
            <div className='flex flex-col lg:flex-row max-w-7xl mx-auto'>
                <div className='lg:w-1/2 flex items-center justify-center'>
                    <Lottie animationData={chef} className='w-[500px]' />
                </div>
                <div className='lg:w-1/2 flex flex-col space-y-3 lg:space-y-7 justify-center'>
                    <h2 className='text-red-600 font-semibold text-sm lg:text-xl'>KEY FEATURES</h2>
                    <h1 className='text-4xl lg:text-6xl font-bold'>Enjoy a Seamless <span className='text-red-500'>Ordering</span> Experience</h1>
                    <p>From fast delivery to a wide selection of cuisines, our food ordering service has everything you need to satisfy your cravings.</p>
                    <div className='flex gap-0 lg:gap-3 pt-4'>
                        <img src={playstore} alt="" className='w-3- h-10' />
                        <img src={appstore} alt="" className='w-3- h-10' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KeyFeatures