import React, { useEffect, useState } from 'react'
import chili from '../assets/chili-pepper.png'
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false)



  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    });
    //remove event
    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header className={`sticky mx-auto z-50 top-0 bg-orange-100 border-2 border-orange-200 transition-all ${header ? 'py-4 bg-white shadow-lg' : 'py-6'}`}>
      <div className='max-w-7xl mx-auto'>
        {/* Mobile nav */}
        <div className='flex md:hidden justify-between px-4'>
          <div className='flex gap-1 items-center'>
            <img src={chili} alt="chili" width={30} height={30} />
            <h1 className='text-red-500 font-bold text-xl'>Spicy <span className='text-gray-800 font-semibold'>Bites</span></h1>
          </div>
          <div>
            <button onClick={() => setMobileNavOpen(prev => !prev)}>

              <Menu />
            </button>
          </div>
        </div>
        {
          mobileNavOpen && (
            <ul 
            onClick={()=> setMobileNavOpen(false)}
            className='md:hidden p-4 bg-orange-100 rounded-lg font-semibold text-xl mt-2 flex flex-col gap-2 text-center'
            >
              <li className='cursor-pointer hover:text-red-500'>Home</li>
              <li className='cursor-pointer hover:text-red-500'>Menu</li>
              <li className='cursor-pointer hover:text-red-500'>About</li>
              <li className='cursor-pointer hover:text-red-500'>Contact</li>
            </ul>
          )
        }

        {/* computer nav */}
        <div className='hidden md:flex justify-between items-center px-10'>
          <div className='font-semibold flex gap-1 items-center'>
            <img src={chili} alt="logo" className='w-10' />
            <h1 className='text-red-500 text-xl font-bold'>Spicy<span className='text-gray-800 font-semibold'>Bites</span></h1>
          </div>
          <div className='flex items-center gap-x-6'>
            <ul className='flex items-center cursor-pointer gap-8 text-black font-semibold'>
              <li className='hover:text-red-500 transition-all'>Home</li>
              <li className='hover:text-red-500 transition-all'>Menu</li>
              <li className='hover:text-red-500 transition-all'>About</li>
              <li className='hover:text-red-500 transition-all'>Contact</li>
              <button className='bg-red-500 px-4 py-2 text-white rounded-lg'>Order Now</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
