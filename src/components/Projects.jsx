import React from 'react';
import ProjectItem from './ProjectItem';
import Syncee from '../assets/Syncee.png';
import animal from '../assets/animal.png';
import { useSubject } from './SubjectContext';

const Projects = () => {
  const { setSubject } = useSubject();

  const handleGetAccessClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    setSubject('Github Access');
  };

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl20 p-4 py-16 mb-6'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <h1 className='text-2xl font-bold text-center text-[#001b5e] mt-8'>
        For GitHub Repository Access - Contact Me Now!
      </h1>
      <div className='grid sm:grid-cols-2 gap-12 mt-16'>
        <ProjectItem img={Syncee} title='Syncee - App [Fake]' />
        <ProjectItem img={animal} title='Animal Shelter' />
      </div>
      <button
        onClick={handleGetAccessClick}
        type='button' 
        className='bg-[#001b5e] text-gray-100 mt-6 w-full p-4 rounded-lg hover:bg-sky-700 '
      >
        Get Access
      </button>
    </div>
  );
};

export default Projects;
