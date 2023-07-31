import React from 'react'

const ProjectItem = ({img, title}) => {
    const handleMoreInfoClick = (event) => {
        event.preventDefault();
        alert('You do not have an access to this GitHub Repository, please Contact the Administrator!');
      };

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#9fb3e7] mt-10'>
    <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[40%] left-[50%] translate-x-[-50%]'>
      <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
        {title}
      </h3>
      <p className='pb-4 pt-2 text-white text-center'>React</p>
      <a href="/">
        <p
          className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'
          onClick={handleMoreInfoClick}
        >
          More Info
        </p>
      </a>
    </div>
  </div>
  )
}

export default ProjectItem