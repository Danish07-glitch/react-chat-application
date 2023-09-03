import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import addavatar from '../assets/addavatar.png'

const Register = () => {

    const [data, setData] = useState({
        "display name":"",
        "email":"",
        "password":"",
        "avatar":""
    })

    const handleChange=(e)=>{
        if(e.target.name !=='avatar'){
            setData({
                ...data,
                [e.target.name]: e.target.value
            })

        }
        else{
            setData({...data,[e.target.name]:URL.createObjectURL(e.target.files[0])})
        }
        
    }
    console.log("data",data);

  return (
    <div className='w-full h-screen bg-blue-300'>
        <div className='py-36'>

       <div className='w-[420px] h-[450px] mx-auto bg-white shadow-lg rounded-xl'>

        <div className='max-w-[310px] mx-auto py-16 '>
            <h1 className='text-center text-xl font-mono text-gray-700'>Register to private Chat</h1>

            <form className='flex flex-col py-8'>
                
                <input name='display name' onChange={handleChange} className='mb-6 outline-none' type="text" placeholder='display name' />
                <input name='email' onChange={handleChange} className='mb-6 outline-none' type="email" placeholder='email' />
                <input name='password' onChange={handleChange} type="password" className='mb-6 outline-none' placeholder='password' />
                <div className='flex my-4'>
                <div className='w-7 mr-4 '>
                    <span>
                    {/* <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"/> */}

               
                {
                    data.avatar ?<img src={data.avatar} alt="" />: <img className='w-full object-contain' src={addavatar} alt="avatar"/>
                }
                
                    </span>
                   
            </div>
            <label className='text-gray-500 font-mono cursor-pointer'><span>Add an Avatar</span>
            
                    <input name='avatar' onChange={handleChange} type="file" className='hidden' />
            </label>

                {/* <h1 className='text-gray-500 font-mono'>Add an Avatar</h1> */}


                </div>
               
                <button className='border p-1 font-mono bg-blue-500 text-white'>Sign Up</button>
                <p className='py-8 text-center font-mono'><span className='mr-1'>Already a Member?</span>
                <span className='underline'>
                <Link to='/login'>
            Sign In
            </Link>

                </span>
                    </p>
           

            </form>
            <div>

            </div>

        </div>
     
     
        </div>


       </div>
    </div>
  )
}

export default Register