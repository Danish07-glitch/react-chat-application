import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Chats from './Chats'


const Sidebar = () => {
  return (
    <div className='w-[300px]  h-[500px] bg-[#3e3c61] rounded-xl rounded-br-none'>
    <>
        <Navbar/>
        <Searchbar/>
        <Chats/>
      
    </>    
    
    </div>
  )
}

export default Sidebar