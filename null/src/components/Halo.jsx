import React from 'react'
import halo from '../img/HaloArt.jpg'

const Halo = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] h-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-500' src={halo} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-purple font-bold'>HALO</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SINGLE 1</h1>
                <p className=''>Halo is the resounding gong of the end. It describes the unexpected and sudden invasion of death in our lives - a presence that is always present, but never as vivid as it becomes when our hour arrives. In the case of Phase 1: In Vain, this overwhelming force has arrived at everyone at once - and people scramble to adjust or cope with this moment. “I reside at the bottom of the hourglass” is a line that speaks to that moment of finality for all involved in this rare universal truth, or in a way, solidarity in the face of impending doom.</p>
                <button className='bg-[purple] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>WEARENULL</button>
            </div>
        </div>
    </div>
  )
}

export default Halo