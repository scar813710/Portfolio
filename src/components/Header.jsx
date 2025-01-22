import React from 'react'

const Header = () => {
  return (
    <div className='py-6 px-6 mx-auto text-white border-b border-[#ffffff54]'>
        <nav className='flex justify-between items-center'>
            <a href="" className='text-white font-extrabold text-[32px]'><span className='text-[#c55648]'> Rodolfo </span>  Guerrero</a>
            <ul className='flex text-white gap-4 font-normal text-[16px]'>
                <a href="">Home</a>
                <a href="">About Me</a>
                <a href="">Experience</a>
                <a href="">Education</a>
                <a href="">Project</a>
                <a href="">Contact</a>
            </ul>
        </nav>
    </div>
  )
}

export default Header