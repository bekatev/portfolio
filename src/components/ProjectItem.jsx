import React from 'react';
import Modal from './Modal'




const ProjectItem = ({img, title, link, language}) => {
  return (
      <div className='flex flex-col'>
        <a href={link} target='_blank'>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-t-xl group hover:bg-gradient-to-r from-gray-200 to-[#eca6a6]'>
                <img src={img} alt="/" className='rounded-t-xl group-hover:opacity-10 object-cover'/>
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                        {title}
                    </h3>
                    <p className='pb-4 pt-2 text-white text-center'>{language}</p>            
                </div>
            </div>
        </a>
        <Modal />      
        </div>   
    )                  
}

export default ProjectItem