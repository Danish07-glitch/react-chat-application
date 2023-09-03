import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-screen bg-blue-300'>
        <div className='py-36'>

       <div className='w-[420px] h-[350px] mx-auto bg-white shadow-lg rounded-xl'>

        <div className='max-w-[310px] mx-auto py-16 '>
            <h1 className='text-center text-xl font-mono text-gray-700'>Login to private Chat</h1>

            <form className='flex flex-col py-8'>
                
                <input className='mb-6 outline-none' type="text" placeholder='email' />
                <input type="password" className='mb-6 outline-none' placeholder='password' />
                <button className='border p-1 font-mono bg-blue-500 text-white'>Log In</button>
                <p className='py-8 text-center font-mono'><span className='mr-1'>You don't have an account?</span>
                <span className='underline'>
                <Link to='/register'>
            Register
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

export default Login