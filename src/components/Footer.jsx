import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center flex justify-center">
        <p>© {new Date().getFullYear()} Takács Viktor. All rights reserved.</p>
        <p className='ml-10'>This website was created using <strong>React + Vite</strong></p>
      </div>
    </footer>
  )
}

export default Footer