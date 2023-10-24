import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'; 
import { GrProjects } from 'react-icons/gr';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-[#f1cdce]/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursor-pointer transform hover:scale-110 ease-in duration-100'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4 text-[#06b5b4]'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4 text-[#06b5b4]'>Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4 text-[#06b5b4]'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                        <span className='pl-4 text-[#06b5b4]'>Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4 text-[#06b5b4]'>Contact</span>
                    </a>
                </div>
            )
            : (
               ''
            )
        }

    <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <a href="#main" className='shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-36 w-fit'>
                <AiOutlineHome className='mt-1'/>
                <span className='pl-4 xl:block hidden'>Home</span>
            </a>
            <a href="#work" className='shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-36 w-fit'>
                <GrProjects className='mt-1'/>
                <span className='pl-4 xl:block hidden'>Work</span>
            </a>
            <a href="#projects" className='shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-36 w-fit'>
                <AiOutlineProject className='mt-1'/>
                <span className='pl-4 xl:block hidden'>Projects</span>
            </a>
            <a href="#main" className='shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-36 w-fit'>
                <BsPerson className='mt-1'/>
                <span className='pl-4 xl:block hidden'>Resume</span>
            </a>
            <a href="#contact" className='shadow-lg bg-[#eca6a6] shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-36 w-fit'>
                <AiOutlineMail className='mt-1'/>
                <span className='pl-4 xl:block hidden'>Contact</span>
            </a>
        </div>
    </div>

    </div>
  )
}

export default Navbar 