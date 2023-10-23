import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='relative'>
        <img className='w-full h-screen object-cover' src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=1380&t=st=1698068935~exp=1698069535~hmac=d67f1e217f7e79cf6595912b050e9d6116b2b994d308bcfca68666d70964cb70" alt='/'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/70'></div>
        
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
            <h1 className='sm:text-5xl text-4xl text-gray-800'>I'm Beka Tevdorashvili</h1>
            <h2 className='flex sm:text-3xl text-2xl text-gray-800'>I'm a  
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
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
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaFacebook className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Main