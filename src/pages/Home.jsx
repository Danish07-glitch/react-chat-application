import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import cat from '../assets/cat.png'

const Home = () => {
  return (
    <div className='w-full h-screen bg-blue-400'>
        <div className='py-24'>

            <div className='w-[850px] h-[500px] mx-auto  rounded-xl'>
              <div className='flex'>
                        

                    <Sidebar/>
                    <Chat/>
                
              </div>

            </div>

        </div>
    </div>
  )
}

export default Home