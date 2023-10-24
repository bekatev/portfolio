import React from 'react'
import ProjectItem from './ProjectItem'
import spotify from '../assets/spotify.png'
import quiz from '../assets/quiz.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-primary'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore voluptas eos aperiam recusandae quos reiciendis est tenetur quidem pariatur hic impedit dolor totam, odio fuga temporibus quaerat voluptatum dolore.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={spotify} title='Spotify' link='https://bekatev.github.io/spotify/' language='HTML/CSS/JS'/>
            <ProjectItem img={quiz} title='Quiz App' link='https://bekatev.github.io/Quiz/' language="HTML/CSS/JS" />
            <ProjectItem img={spotify} title='3'/>
            <ProjectItem img={spotify} title='4'/>
        </div>
    </div>
  )
}

export default Projects