import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const  Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed top-0 w-full flex justify-between h-12 px-4 mx-auto items-center text-white bg-black'>
            <h1 className='w-full text-3xl font-bold text-[#4302bb]'>NULL</h1> 
            <ul className='hidden md:flex'>
                <li className='p-4'>HOME</li>
                <li className='p-4'>MUSIC</li>
                <li className='p-4'>TOUR</li>
                <li className='p-4'>MEMBERS</li>
                <li className='p-4'>CONTACT</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#4302bb] m-4'>NULL</h1> 
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-700'>HOME</li>
                    <li className='p-4 border-b border-gray-700'>MUSIC</li>
                    <li className='p-4 border-b border-gray-700'>TOUR</li>
                    <li className='p-4 border-b border-gray-700'>MEMBERS</li>
                    <li className='p-4'>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar