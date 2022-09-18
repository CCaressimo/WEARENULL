import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaTwitch
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-6 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>ONLY IF YOU SENSE THAT THE END IS COMING</h1>
          <p>SIGN UP YOU COWARD</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='ENTER YOUR SOUL' />
            <button className='bg-[purple] w-[150px] rounded-md font-medium ml-4 my-6 px-6 py-1 text-black'>THEY WILL KNOW</button>
          </div>
          <div className='flex justify-between md:w-[75%] my-6}'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaTiktok size={30}/>
            <FaTwitch size={30}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer