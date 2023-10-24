import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import "@fontsource-variable/source-code-pro"
import background from '../assets/bg.jpeg'

const Main = () => {
  return (
    <div id='main' className='relative'>
        <div className='w-full h-screen object-cover bg-bckg'/>
        <div className='max-w-[900px] m-auto h-full w-full flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
            <h1 className='sm:text-5xl text-3xl text-gray-800 text-center'>Hello, I'm Beka Tevdorashvili</h1>
            <h2 className='flex sm:text-3xl text-xl text-gray-800'>I'm a  
            <TypeAnimation
                sequence={[
                    'Front-end Developer',
                    1000,
                    'Tech guy',
                    1000
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
                />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <div className='transform transition duration-500 hover:scale-110'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                </div>
                <div className='transform transition duration-500 hover:scale-110'>
                    <FaFacebook className='cursor-pointer' size={20}/>
                </div>
                <div className='transform transition duration-500 hover:scale-110'>
                    <FaInstagram className='cursor-pointer' size={20}/>
                </div>
                <div className='transform transition duration-500 hover:scale-110'>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main