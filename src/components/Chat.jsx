import React from 'react'
import camrecorder from '../assets/cam-recorder.png'
import addusers from '../assets/addusers.png'
import tripledots from '../assets/triple-horizontally-aligned-lines.png'
import Messages from './Messages'
import Inputpanel from './Inputpanel'


const Chat = () => {
  return (
    <div className='w-[550px] h-[500px]  rounded-xl'>
        <div className='w-full text-white flex justify-between p-3 bg-[#5d5b8d] rounded-tr-xl'>
            <h1>Kalpesh</h1>
            <div className='flex h-6 '>
                <img className='mr-2 h-4 text-white' src={camrecorder} alt="" />
                <img className='mr-2 h-4 text-white' src={addusers} alt="" />
                <img className=' h-4 text-white' src={tripledots} alt="" />
            </div>
            
        </div>
        <Messages/>
        <Inputpanel/>
    </div>
    
  )
}

export default Chat