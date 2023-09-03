import React from 'react'
import {GrAttachment} from 'react-icons/gr'
import {BiImageAdd} from 'react-icons/bi'

const Inputpanel = () => {
  return (
    <div className=' h-[50px] rounded-br-xl w-full '>
      <div className='h-full w-full flex items-center bg-white justify-between rounded-br-xl'>
      <input className='h-full w-full  outline-none border-none' type="text" placeholder='Type Something...' />
       
      <div className='flex items-center bg-white h-full w-36 rounded-br-xl'>
        <GrAttachment className='mr-2'/>
        <BiImageAdd className='mr-2'/>
        <button className='p-2 text-white text-sm font-bold bg-blue-300'>Send</button>

        </div>        
      </div>
    </div>
  )
}

export default Inputpanel