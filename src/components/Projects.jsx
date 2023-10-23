import React from 'react'
import ProjectItem from './ProjectItem'
import firstImg from '../assets/firstImg.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore voluptas eos aperiam recusandae quos reiciendis est tenetur quidem pariatur hic impedit dolor totam, odio fuga temporibus quaerat voluptatum dolore.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={firstImg} title='1'/>
            <ProjectItem img={firstImg} title='2'/>
            <ProjectItem img={firstImg} title='3'/>
            <ProjectItem img={firstImg} title='4'/>
        </div>
    </div>
  )
}

export default Projects