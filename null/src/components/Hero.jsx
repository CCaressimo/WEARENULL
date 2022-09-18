import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white px-4'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center'>
            <p className='text-[purple] font-bold p-2'>WE ARE NULL</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>AHHHHH</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>SHITTING PISSING FARDING</p>
            </div>
            <Typed 
                className='md:text-3xl sm:text-2xl text-xl font-bold py-4'
                strings={['HALO','ERROR...','SWALLOW...','THE...','KNIFE...']}
                typeSpeed={60}
                backSpeed={75}
                loop
            />
            <button className='bg-[purple] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'>WEARENULL</button>
        </div>
    </div>
  )
}

export default Hero