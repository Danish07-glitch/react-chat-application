import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic3.jpg'


const Messages = () => {
  return (
    <>
    <div className='overflow-y-scroll	h-[400px] scroll-smooth scrollbar-hide bg-[#ddddf7]'>

    {/* For Friends Messages */}
    <div className='flex flex-row py-2 px-2'>
      <div className=''>
      <img className="object-cover w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2" src={pic1} alt="Bordered avatar"/>
      <p className='text-gray-400'>just now</p>
      </div>
      <div className='bg-white h-9 max-w-[80%] flex justify-center items-center rounded-lg rounded-tl-none p-2'>

        <h1 className='text-sm font-mono'>How Are You</h1>

      </div>

    </div>

    {/* For Own Messsages */}
    <div className='flex flex-row-reverse   py-2 px-2'>
      <div className=''>
      <img className="object-cover w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2" src={pic2} alt="Bordered avatar"/>
      <p className='text-gray-400'>just now</p>
      </div>
      <div className='h-9 max-w-[80%] flex justify-center items-center rounded-lg rounded-tr-none mr-2 p-2 bg-blue-300'>

        <h1 className='text-sm font-mono text-white'>I'm Fine, How's Work?</h1>

      </div>

    </div>

    </div>
    </>
  )
}

export default Messages