import React from 'react'
import cat from '../assets/cat.png'

const Navbar = () => {
  return (
    <div className='flex text-white  w-full bg-[#2f2d52] rounded-tl-xl'>
      <div className='p-3 flex w-full justify-between items-center'>
        <div>

        <h1 className='font-mono'>GiGaChat</h1>
        </div>


        <div className='flex items-center'>
        <img className="w-6 h-6 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2" src={cat} alt="Bordered avatar"/>
        <h1 className='mr-2'>Danish Kazi</h1>
        <button className='p-1 bg-[#5d5b8d] text-sm rounded-sm'>Logout</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar