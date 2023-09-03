import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'

const jsondata=[
  {
    "id": 1,
    "avatar":pic1,
    "name":"Ramesh"
  },
  {
    "id": 2,
    "avatar":pic2,
    "name":"Rukhaiya"
  },
  {
    "id": 3,
    "avatar":pic3,
    "name":"Inamdar"
  },
  {
    "id": 4,
    "avatar":pic4,
    "name":"Kalpesh"
  },
  {
    "id": 1,
    "avatar":pic5,
    "name":"Kumari"
  },
]


const Chats = () => {
  return (
    <div className='p-3'>

      {
        jsondata.map((value,id)=>(

      <div className='flex text-white w-full p-2  mb-2 hover:bg-slate-500 rounded-lg cursor-pointer'>
      
      <img className="object-cover w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2" src={value.avatar} alt="Bordered avatar"/>
      
      <div className=''>
        <h1>{value.name}</h1>
        <p className='text-sm text-gray-400'>Hi,Rakesh</p>

      </div>
     
      </div>
        ))
      }
    </div>
  
  )
}

export default Chats